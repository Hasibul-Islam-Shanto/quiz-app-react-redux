import { Box } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { scoreChange } from "../redux/actions";

const Scores = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { amount_of_ques, score } = useSelector((state) => state);
  const finalClick = () => {
    dispatch(scoreChange(0));
    navigate("/");
  };
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>
        Your score : {score} / {amount_of_ques}
      </h1>
      <Box
        variant="contained"
        onClick={finalClick}
        sx={{
          bgcolor: "#eeee",
          padding: "2rem",
          borderRadius: "2rem",
          fontSize: "2rem",
          fontWeight: "bold",
          cursor: "pointer",
          color: "#73777B",
        }}
      >
        Go to homepage for new quiz
      </Box>
    </Box>
  );
};

export default Scores;
