import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React from "react";
import Amount from "../components/Amount";
import SelectOption from "../components/SelectOption";
import useAxios from "../hooks/useAxios";
import { Difficulty, Type } from "../data/data";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();

  const { response, loading, error } = useAxios({ url: "/api_category.php" });

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

  if (error) {
    return (
      <Typography sx={{ fontSize: "1.2rem", color: "red" }}>
        Something went wrong
      </Typography>
    );
  }

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          mt={5}
          sx={{
            fontSize: "3.5rem",
            fontWeight: "bold",
          }}
        >
          Quiz App
        </Typography>

        <SelectOption options={response.trivia_categories} label="Category" />
        <SelectOption options={Difficulty} label="Difficulty" />
        <SelectOption options={Type} label="Type" />
        <Amount label="Amount of Questions" />

        <Button
          onClick={() => navigate("/questions")}
          variant="contained"
          sx={{
            minWidth: "340px",
            marginTop: "1rem",
          }}
        >
          Get started
        </Button>
      </Box>
    </>
  );
};

export default Settings;
