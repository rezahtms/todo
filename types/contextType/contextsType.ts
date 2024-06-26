import { Dispatch, SetStateAction } from "react";
import { CompanyType, EditStateType, TasksType } from "../stateType/statesType";

// TodoContext Types
export interface TodoContextType {

  companyData: CompanyType[];
  handleCompanyData: Dispatch<SetStateAction<CompanyType[]>>;
  handleAddCompany: (companyName: string) => void;
  handleDeleteCompanyItem: (id: number, title: string) => void;
  handleEditCompany: (id: number, newCompanyName: string) => void;
}

// TaskContext Type
export interface TaskContextType {
  handleAddColumn: (name: string, id: string) => void;
  updateColumnEdit: (params: string, id: number, title: string) => void;
  handleDeleteColumn: (paramId: string, id: number, title: string) => void;
  isOpenModal: boolean;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  taskStatus: string;
  setTaskStatus: Dispatch<SetStateAction<string>>;
  handleAddTask: (newTask: TasksType, paramId: number) => void;
  handleDeleteTask: (
    title: string,
    paramId: number,
    columnId: number,
    taskId: number
  ) => void;
  columnId: number;
  setColumnId: Dispatch<SetStateAction<number>>;
  handleDragAndDrop: (
    paramId: number,
    columnId: number,
    taskId: number,
    newStatus: string
  ) => void;
}
