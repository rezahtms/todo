import { IconButton } from "@material-ui/core";
import { Box, Stack } from "@mui/material";
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
  const { handleDeleteCompanyItem, handleEditCompany } =
    useContext(TodoContext);
  const handleEditData = () => {
    const promptValue = window.prompt("please inter new Name", companyName);

    if (promptValue && promptValue.length > 3) {
      handleEditCompany(companyId, promptValue);
    } else if (promptValue === null) {
      return;
    } else {
      alert("input is not valid");
    }
  };
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
      <IconButton onClick={handleEditData}>
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
