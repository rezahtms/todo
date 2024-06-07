"use client";
import { Box, Container, Stack, Typography } from "@mui/material";
import { FC, useContext } from "react";
import { TodoContext } from "../../../contexts/TodoProvider";
import ColumnActions from "../../molecules/columnActions/ColumnActions";
import TaskItem from "../taskItem/TaskItem";
import { TaskContext } from "../../../contexts/TaskProvider";

const TodoColumns: FC<{ paramsId: string }> = ({ paramsId }) => {
  // Using TodoContext
  const { companyData } = useContext(TodoContext);
  const { handleDragAndDrop } = useContext(TaskContext);
  // Finding Company By CompanyId
  const finding = companyData?.find(
    (company) => company.companyId === +paramsId
  );
  const renderAbleColumn = finding?.companyColumn.map((item) => ({
    columnId: item.columnId,
    columnTitle: item.columnTitle,
    tasks: item.tasks.filter((task) => task.taskStatus === item.columnTitle),
  }));
  return (
    <Container maxWidth="xl" sx={{ mt: 1 }}>
      <Stack
        direction="row"
        spacing={2}
        sx={{ overflowX: "auto", pb: 1 }}
        component="section"
      >
        {renderAbleColumn?.map((item) => (
          <Box
            key={`column__${item.columnId}`}
            sx={{
              minWidth: "31.75vw",
              padding: 0.5,
              border: "1px solid white",
              backgroundColor: "#1976d2",
            }}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              const taskId = e.dataTransfer.getData("id");
              handleDragAndDrop(
                +paramsId,
                item.columnId,
                +taskId,
                item.columnTitle
              );
            }}
          >
            <Typography variant="h3" fontSize={18} color="#fff">
              {item.columnTitle}
            </Typography>
            <ColumnActions
              id={item.columnId}
              title={item.columnTitle}
              paramId={paramsId}
              columnId={item.columnId}
            />
            <ul>
              {item.tasks.map((task) => (
                <TaskItem
                  key={task.taskId}
                  {...task}
                  paramsId={Number(paramsId)}
                  columnId={item.columnId}
                  columnTitle={item.columnTitle}
                />
              ))}
            </ul>
          </Box>
        ))}
      </Stack>
    </Container>
  );
};

export default TodoColumns;
