"use client";
import styled from "@emotion/styled";
import { FC, useContext } from "react";
import { TodoContext } from "../../../contexts/TodoProvider";
import { CustomInputProps } from "../../../types/componentsPropsTypes";

const Input = styled("input")({
  width: "30%",
  outline: "none",
  border: "1px solid #1976d2",
  padding: "0 8px",
  boxShadow:
    " 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
});

const CustomInput: FC<CustomInputProps> = ({ placeholder }) => {
  // using of TodoContext
  const { inputValue, setInputValue } = useContext(TodoContext);
  return (
    <Input
      onChange={(event) => setInputValue(event.target.value)}
      value={inputValue}
      placeholder={placeholder}
    />
  );
};

export default CustomInput;
