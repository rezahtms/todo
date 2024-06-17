"use client";
import { Button, Dialog, FormLabel, Stack, Typography } from "@mui/material";
import TaskInput from "../../atoms/taskInput/TaskInput";
import { Textarea } from "@mui/joy";
import { FC, useContext } from "react";
import { TaskContext } from "../../../contexts/TaskProvider";
import { TasksType } from "../../../types/stateType/statesType";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
interface IFormInput {
  currentTarget: HTMLFormElement | undefined;
  taskTitle: string;
  taskAssigned: string;
  taskDefined: string;
}
const Modal: FC<{ paramId: string }> = ({ paramId }) => {
  const { isOpenModal, setIsOpenModal, taskStatus, handleAddTask } =
    useContext(TaskContext);
  const { handleSubmit, register } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {};
  return (
    <Dialog
      open={isOpenModal}
      onClose={() => setIsOpenModal((open) => !open)}
      sx={{
        backgroundColor: "hsla(0, 0%, 25.49019607843137%, 0.308)",
        backdropFilter: "blur(3px)",
      }}
    >
      <Stack
        onSubmit={handleSubmit((event) => {
          const formData = Object.fromEntries(
            new FormData(event.currentTarget).entries()
          );
          const newTask = {
            taskId: Number(Date.now()),
            taskStatus: taskStatus,
            ...formData,
          } as TasksType;
          handleAddTask(newTask, Number(paramId));
          setIsOpenModal((open) => !open);
        })}
        component="form"
        spacing={1}
        direction="column"
        sx={{
          backgroundColor: "hsla(0, 0%, 25.49019607843137%, 0.308)",
          backdropFilter: "blur(9px)",
          p: 1,
        }}
      >
        <Typography
          variant="h6"
          color="white"
          bgcolor="#0288d1"
          padding="0 4px"
          borderRadius="4px"
        >
          Adding Task
        </Typography>
        <TaskInput
          {...register("taskTitle")}
          placeholder="Enter Task Title"
          autofocus
        />
        y
        <TaskInput
          {...register("taskAssigned")}
          name="taskAssigned"
          placeholder="Task For"
        />
        <FormLabel htmlFor="task-defined">Define Task</FormLabel>
        <Textarea
          {...register("taskDefined")}
          name="taskDefined"
          color="neutral"
          minRows={3}
          size="lg"
          placeholder="Define task"
        />
        <Button type="submit" variant="contained">
          Add
        </Button>
      </Stack>
    </Dialog>
  );
};
export default Modal;
