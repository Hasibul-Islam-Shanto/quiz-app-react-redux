import { Box, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import useAxios from "../hooks/useAxios";

const Questions = () => {
  const { ques_category, ques_difficulty, ques_type, amount_of_ques, score } =
    useSelector((state) => state);
  const [questions, setQuestions] = useState([]);
  let apiUrl = `/api.php?amount=${amount_of_ques}`;
  console.log(ques_category, ques_difficulty, ques_type, amount_of_ques);
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
  console.log(response.results);
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>All questions...</h1>
      </Box>
    </>
  );
};

export default Questions;
