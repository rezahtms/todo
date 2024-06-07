import { IconButton } from "@material-ui/core";
import { Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";
import { FC, useContext } from "react";
import { CompanyItemPropsTypes } from "../../../types/componentsPropsTypes";
import { TodoContext } from "../../../contexts/TodoProvider";
const CompanyItem: FC<CompanyItemPropsTypes> = ({
  companyId,
  companyName,
  companyNumber,
}) => {
  // Using Todo Context
  const { handleDeleteCompanyItem, setInputValue, setIsEdit } =
    useContext(TodoContext);
  return (
    <Stack
      component="li"
      direction="row"
      spacing={1}
      alignItems="center"
      border="1px solid #fff"
      padding="0 4px"
      mb={0.5}
    >
      <Link
        href={`/${companyId}`}
        style={{ color: "#fff", width: "100%", display: "block" }}
      >
        {companyNumber} - {companyName}
      </Link>
      <IconButton
        onClick={() => {
          setInputValue(companyName);
          setIsEdit({
            edit: true,
            item: { id: companyId, value: companyName },
          });
        }}
      >
        <EditIcon fontSize="small" color="secondary" />
      </IconButton>
      <IconButton
        onClick={() => handleDeleteCompanyItem(companyId, companyName)}
      >
        <DeleteIcon fontSize="small" color="error" />
      </IconButton>
    </Stack>
  );
};

export default CompanyItem;
