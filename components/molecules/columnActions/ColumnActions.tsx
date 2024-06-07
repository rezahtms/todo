import { IconButton, Stack } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import { FC, useContext } from "react";
import { ColumnActionsPropsType } from "../../../types/componentsPropsTypes";
import { TaskContext } from "../../../contexts/TaskProvider";
import { TodoContext } from "../../../contexts/TodoProvider";
const ColumnActions: FC<ColumnActionsPropsType> = ({ paramId, id, title }) => {
  // Using Task Context & TodoContext
  const { setIsEdit, setInputValue } = useContext(TodoContext);
  const { handleDeleteColumn, setIsOpenModal, setTaskStatus, setColumnId } =
    useContext(TaskContext);
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      border="1px solid #fff"
    >
      <IconButton
        onClick={() => {
          setIsOpenModal(true);
          setTaskStatus(title);
          setColumnId(id);
        }}
      >
        <AddIcon />
      </IconButton>
      <IconButton
        onClick={() => {
          setIsEdit({ edit: true, item: { id: id, value: title } });
          setInputValue(title);
        }}
      >
        <Edit fontSize="small" color="secondary" />
      </IconButton>
      <IconButton onClick={() => handleDeleteColumn(paramId, id, title)}>
        <Delete fontSize="small" color="error" />
      </IconButton>
    </Stack>
  );
};

export default ColumnActions;
