import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAxios from "../hooks/useAxios";
import { useNavigate } from "react-router-dom";
import { scoreChange } from "../redux/actions";
import { decode } from "html-entities";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const Questions = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { ques_category, ques_difficulty, ques_type, amount_of_ques, score } =
    useSelector((state) => state);

  let apiUrl = `/api.php?amount=${amount_of_ques}`;

  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);

  if (ques_category) {
    apiUrl = apiUrl.concat(`&category=${ques_category}`);
  }
  if (ques_difficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${ques_difficulty}`);
  }
  if (ques_type) {
    apiUrl = apiUrl.concat(`&type=${ques_type}`);
  }
  const { response, loading } = useAxios({ url: apiUrl });

  useEffect(() => {
    if (response?.results.length) {
      const question = response.results[questionIndex];
      const answer = [...question.incorrect_answers];
      answer.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOptions(answer);
    }
  }, [questionIndex, response]);

  if (loading) {
    return (
      <Box
        mt={20}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <CircularProgress />
      </Box>
    );
  }
  if (response.results.length === 0) {
    navigate("/");
  }

  const handleChangeQuestions = (e) => {
    const question = response.results[questionIndex];
    if (e.target.textContent === question.correct_answer) {
      dispatch(scoreChange(score + 1));
    }

    if (questionIndex + 1 < response.results.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      navigate("/score");
    }
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            minWidth: 320,
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>Question - {questionIndex + 1}</h1>
          <h2>{decode(response.results[questionIndex].question)}</h2>
          <Box
            container
            spacing={8}
            sx={{
              width: "100%",
              padding: ".5rem",
              display: "grid",
              gridTemplateColumns: { md: "1fr 1fr", sm: "1fr" },
              gridGap: "2rem",
              // bgcolor: "#90C8AC",
            }}
          >
            {options.map((data, id) => (
              <Typography
                sx={{
                  padding: "1rem",
                  textAlign: "center",
                  borderRadius: "2rem",
                  cursor: "pointer",
                  boxShadow: "0 1px 3px 1px rgba(0,0,0,.1)",
                  ":hover": {
                    transform: "scale(1.1)",
                    transition: ".5s ease-out",
                  },
                  fontSize:"1.1rem"
                }}
                key={id}
                onClick={handleChangeQuestions}
              >
                {decode(data)}
              </Typography>
            ))}
          </Box>
        </Box>
        <h2>
          Score : {score}/ {response.results.length}
        </h2>
      </Box>
    </>
  );
};

export default Questions;
