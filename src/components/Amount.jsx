import { TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { amountChange } from "../redux/actions";

const Amount = (props) => {
  const { label } = props;
  const dispatch = useDispatch();

  const handleAmount = (e) => {
    dispatch(amountChange(e.target.value));
  };
  return (
    <>
      <TextField
        label={label}
        size="small"
        variant="outlined"
        type="number"
        //   value={}
        onChange={handleAmount}
        sx={{ width: "100%", marginTop: "1rem" }}
      ></TextField>
    </>
  );
};

export default Amount;
