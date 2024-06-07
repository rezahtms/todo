"use client";
import { IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { FC, useContext } from "react";
import { TaskContext } from "../../../contexts/TaskProvider";
import { TaskItemPropsType } from "../../../types/componentsPropsTypes";
const TaskItem: FC<TaskItemPropsType> = (props) => {
  const { handleDeleteTask, handleDragAndDrop } = useContext(TaskContext);
  const {
    taskTitle,
    taskId,
    taskAssigned,
    taskDefined,
    taskStatus,
    paramsId,
    columnId,
    columnTitle,
  } = props;
  return (
    <li
      draggable
      onDragStart={(event) => event.dataTransfer.setData("id", String(taskId))}
      onDragEnd={() => {
        handleDragAndDrop(+paramsId, columnId, taskId, columnTitle);
      }}
      style={{
        backgroundColor: "#E15656",
        border: "2px solid  rgba(65, 65, 65, 0.493)",
        padding: "4px",
        margin: "8px 0",
        borderRadius: 0.6,
        color: "#fff",
      }}
    >
      <IconButton
        onClick={() => handleDeleteTask(taskTitle, paramsId, columnId, taskId)}
      >
        <DeleteIcon fontSize="small" />
      </IconButton>
      <Typography paragraph>Title : {taskTitle}</Typography>
      <Typography paragraph>
        assigned to : {taskAssigned ? taskAssigned : "unknown"}
      </Typography>
      {taskDefined && (
        <Typography paragraph>defined : {taskDefined}</Typography>
      )}
    </li>
  );
};

export default TaskItem;
