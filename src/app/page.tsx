"use client";
import { useContext } from "react";
import AddData from "../../components/organisms/addData/AddData";
import CompaniesList from "../../components/organisms/companyList/CompanyList";
import { TodoContext } from "../../contexts/TodoProvider";

export default function Home() {
  // Using TodoContext
  const { handleAddCompany, handleEditCompany } = useContext(TodoContext);
  return (
    <>
      <AddData
        handleAddData={(name) => handleAddCompany(name)}
        handleEditData={() => handleEditCompany()}
        placeholder="Please Inter Your Company Name..."
      />
      <CompaniesList />
    </>
  );
}
