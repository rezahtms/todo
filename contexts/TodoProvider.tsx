"use client";
import { FC, createContext, useEffect, useState } from "react";
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
  // Set Data To CompanyState In First Render
  useEffect(() => {
    setCompany(getItems());
  }, []);

  // Handle Add New Company
  const handleAddCompany = () => {
    // Creating Object Of CompanyItem
    const newCompany: CompanyType = {
      companyId: Number(Date.now()),
      companyName: inputValue,
      companyColumn: [],
    };
    // Set New Data To Company State
    setCompany((current) => [...current, newCompany]);
  };

  // Handle Edit Company
  const handleEditCompany = () => {
    setCompany((current) =>
      current.map((item) =>
        item.companyId === isEdit.item.id
          ? { ...item, companyName: inputValue }
          : item
      )
    );
  };

  //Handle Delete Company Item
  const handleDeleteCompanyItem = (id: number, title: string) => {
    const isConfirm = window.confirm(
      `Are Your Sure Want Delete ${title} Company?`
    );
    if (isConfirm)
      setCompany((current) => current.filter((item) => item.companyId !== id));
  };

  // Set Data To LocalStorage When Re-Rendering The Company
  useEffect(() => {
    setItems(company);
  }, [company]);

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
