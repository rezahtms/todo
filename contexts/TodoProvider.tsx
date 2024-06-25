"use client";

import { FC, createContext, useState } from "react";
import { TodoContextType } from "../types/contextType/contextsType";
import { initialTodoContext } from "../types/contextType/initialContextType";
import { TodoProviderPropsTypes } from "../types/componentsPropsTypes";
import { CompanyType } from "../types/stateType/statesType";
import { useLocalStorage } from "../hooks/useLocalStorage";

// creating createContext For Todo
export const TodoContext = createContext<TodoContextType>(initialTodoContext);

const TodoProvider: FC<TodoProviderPropsTypes> = ({ children }) => {
  // Get And Set Data From LocalStorage Hook
  const { getItems, setItems } = useLocalStorage("company");
  // Creating Company State
  const [company, setCompany] = useState<CompanyType[]>(getItems());

  // Handle Add New Company
  const handleAddCompany = (companyName: string) => {
    // Creating Object Of CompanyItem
    const newCompany: CompanyType = {
      companyId: Number(Date.now()),
      companyName,
      companyColumn: [],
    };

    const newCompanies = [...company, newCompany];
    setCompany(newCompanies);
    setItems(newCompanies);
  };

  // Handle Edit Company
  const handleEditCompany = (id: number, newData: string) => {
    const newCompanies = company.map((item) =>
      item.companyId === id ? { ...item, companyName: newData } : item
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
        companyData: company,
        handleCompanyData: setCompany,
        handleAddCompany: handleAddCompany,
        handleDeleteCompanyItem: handleDeleteCompanyItem,
        handleEditCompany: handleEditCompany,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
