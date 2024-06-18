import { ReactElement, ReactNode } from "react";

// TodoProvider Props Type
export interface TodoProviderPropsTypes {
  children: ReactElement | ReactNode;
}

export interface CompanyItemPropsTypes {
  companyId: number;
  companyName: string;
  companyNumber: number;
}

export interface AddDataProps {
  handleAddData: (name: string) => void;
  handleEditData: () => void;
  placeholder?: string;
}

export interface CustomInputProps {
  placeholder?: string;
  registerName: string;
}

export interface TaskProviderProps {
  children: ReactElement | ReactNode;
}

export interface ColumnActionsPropsType {
  id: number;
  columnId: number;
  title: string;
  paramId: string;
}
export interface TaskInputPropsType {
  id?: string;
  name?: string;
  placeholder?: string;
  autofocus?: boolean;
}

export interface TaskItemPropsType {
  taskTitle: string;
  taskId: number;
  taskAssigned: string;
  taskDefined: string;
  taskStatus: string;
  paramsId: number;
  columnId: number;
  columnTitle: string;
}
