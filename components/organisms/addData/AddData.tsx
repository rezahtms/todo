"use client";
import { Container, Stack, Button } from "@mui/material";
import CustomInput from "../../atoms/customInput/CustomInput";
import { FC, FormEvent, useContext } from "react";
import { TodoContext } from "../../../contexts/TodoProvider";
import { AddDataProps } from "../../../types/componentsPropsTypes";

const AddData: FC<AddDataProps> = ({
  handleAddData,
  handleEditData,
  placeholder,
}) => {
  // Using TodoContext
  const { inputValue, setInputValue, isEdit, setIsEdit } =
    useContext(TodoContext);

  // handle Form Submit For Add Data
  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isEdit.edit) {
      // If Edit Is True, Change The Data Value
      handleEditData();
    } else {
      handleAddData();
    }
    setInputValue("");
    setIsEdit({ ...isEdit, edit: false });
  };

  return (
    <Container maxWidth="xl" sx={{ background: "#1976d2", padding: "8px 0" }}>
      <Stack
        component="form"
        direction="row"
        spacing={2}
        onSubmit={handleFormSubmit}
      >
        <CustomInput placeholder={placeholder} />
        <Button
          variant="contained"
          type="submit"
          disabled={inputValue.trim().length >= 1 ? false : true}
        >
          {isEdit.edit ? "Edit" : "Add"}
        </Button>
      </Stack>
    </Container>
  );
};

export default AddData;
