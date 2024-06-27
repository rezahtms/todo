import { IconButton, Stack } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import { FC, useContext } from "react";
import { ColumnActionsPropsType } from "../../../types/componentsPropsTypes";
import { TaskContext } from "../../../contexts/TaskProvider";
const ColumnActions: FC<ColumnActionsPropsType> = ({ paramId, id, title }) => {
  const {
    handleDeleteColumn,
    setIsOpenModal,
    setTaskStatus,
    setColumnId,
    updateColumnEdit,
  } = useContext(TaskContext);
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
          const prompt = window.prompt(`edit ${title} column value`, title);
          if (prompt && prompt.length > 3) {
            updateColumnEdit(paramId, +id, prompt);
          } else if (prompt === null) {
            return;
          } else {
            alert("input value is invalid");
          }
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
