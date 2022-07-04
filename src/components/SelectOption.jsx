import { Box, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { categoryChange, difficultyChange, typeChange } from "../redux/actions";

const SelectOption = (props) => {

  const { label, options } = props;

  const dispatch = useDispatch();

  const [selectValue, setSelectValue] = useState("");

  const handleChange = (event) => {

    setSelectValue(event.target.value);

    switch (label) {
      case "Category":
        dispatch(categoryChange(event.target.value));
        break;

      case "Difficulty":
        dispatch(difficultyChange(event.target.value));
        break;

      case "Type":
        dispatch(typeChange(event.target.value));
        break;
        
      default:
        return;
    }
  };

  return (
    <>
      <Box
        sx={{
          minWidth: "350px",
        }}
      >
        <TextField
          label={label}
          size="small"
          variant="outlined"
          select
          value={selectValue}
          onChange={handleChange}
          sx={{ width: "100%", marginTop: "1rem" }}
        >
          {options.map(({ id, name }) => (
            <MenuItem value={id} key={id}>
              {name}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </>
  );
};

export default SelectOption;
