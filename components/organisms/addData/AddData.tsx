"use client";
import { Container, Stack, Button } from "@mui/material";
import { FC, useContext, useEffect } from "react";
import { TodoContext } from "../../../contexts/TodoProvider";
import { AddDataProps } from "../../../types/componentsPropsTypes";
import styled from "@emotion/styled";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Error from "../../atoms/error/Error";
const schema = z.object({
  inputValue: z.string().min(3),
});

type FormField = z.infer<typeof schema>;

const Input = styled("input")({
  width: "30%",
  outline: "none",
  border: "1px solid #1976d2",
  padding: "0 8px",
  boxShadow:
    " 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
});

const AddData: FC<AddDataProps> = ({
  handleAddData,
  handleEditData,
  placeholder,
}) => {
  // Using TodoContext
  const { inputValue, setInputValue, isEdit, setIsEdit } =
    useContext(TodoContext);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormField>({
    defaultValues: {
      inputValue: "",
    },
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (isEdit.edit) {
      setValue("inputValue", inputValue);
    } else {
      setValue("inputValue", "");
    }
  }, [isEdit.edit]);

  // handle Form Submit For Add Data
  const handleFormSubmit: SubmitHandler<FormField> = (data) => {
    if (isEdit.edit) {
      // If Edit Is True, Change The Data Value
      handleEditData();
    } else {
      handleAddData();
    }
    setValue("inputValue", "");
    setIsEdit({ ...isEdit, edit: false });
  };

  return (
    <Container maxWidth="xl" sx={{ background: "#1976d2", padding: "8px 0" }}>
      <Stack
        component="form"
        direction="row"
        spacing={2}
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <Input
          {...register("inputValue")}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder={placeholder}
        />
        <Button variant="contained" type="submit">
          {isEdit.edit ? "Edit" : "Add"}
        </Button>
      </Stack>
      {errors.inputValue && <Error message={errors?.inputValue?.message} />}
    </Container>
  );
};

export default AddData;
