"use client";
import { FC, createContext, useState } from "react";
import { TodoContextType } from "../types/contextType/contextsType";
import { initialTodoContext } from "../types/contextType/initialContextType";
import { TodoProviderPropsTypes } from "../types/componentsPropsTypes";
import { CompanyType, EditStateType } from "../types/stateType/statesType";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { initialEditStateType } from "../types/stateType/initialStateType";

// creating createContext For Todo
export const TodoContext = createContext<TodoContextType>(initialTodoContext);

const TodoProvider: FC<TodoProviderPropsTypes> = ({ children }) => {
  // Get And Set Data From LocalStorage Hook
  const { getItems, setItems } = useLocalStorage("company");
  // Input Value State
  const [inputValue, setInputValue] = useState<string>("");
  // Creating Company State
  const [company, setCompany] = useState<CompanyType[]>(getItems());
  // Creating Edit State
  const [isEdit, setIsEdit] = useState<EditStateType>(initialEditStateType);

  // Handle Add New Company
  const handleAddCompany = () => {
    // Creating Object Of CompanyItem
    const newCompany: CompanyType = {
      companyId: Number(Date.now()),
      companyName: inputValue,
      companyColumn: [],
    };

    const newCompanies = [...company, newCompany];
    setCompany(newCompanies);
    setItems(newCompanies);
  };

  // Handle Edit Company
  const handleEditCompany = () => {
    const newCompanies = company.map((item) =>
      item.companyId === isEdit.item.id
        ? { ...item, companyName: inputValue }
        : item
    );
    setCompany(newCompanies);
    setItems(newCompanies);
  };

  //Handle Delete Company Item
  const handleDeleteCompanyItem = (id: number, title: string) => {
    const isConfirm = window.confirm(
      `Are Your Sure Want Delete ${title} Company?`
    );
    if (!isConfirm) return;
    const newCompanies = company.filter((item) => item.companyId !== id);
    setCompany(newCompanies);
    setItems(newCompanies);
  };

  return (
    <TodoContext.Provider
      value={{
        inputValue: inputValue,
        setInputValue,
        companyData: company,
        handleCompanyData: setCompany,
        handleAddCompany: handleAddCompany,
        handleDeleteCompanyItem: handleDeleteCompanyItem,
        isEdit: isEdit,
        setIsEdit: setIsEdit,
        handleEditCompany: handleEditCompany,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
