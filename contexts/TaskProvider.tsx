"use client";
import { FC, createContext, useContext, useState } from "react";
import { initialTaskContext } from "../types/contextType/initialContextType";
import { TaskContextType } from "../types/contextType/contextsType";
import { TaskProviderProps } from "../types/componentsPropsTypes";
import { TodoContext } from "./TodoProvider";
import { CompanyColumnType, TasksType } from "../types/stateType/statesType";
// Creating Task Context
export const TaskContext = createContext<TaskContextType>(initialTaskContext);
// Task Provider
const TaskProvider: FC<TaskProviderProps> = ({ children }) => {
  // Using TodoContext
  const { handleCompanyData } = useContext(TodoContext);
  // State For Open And Close Modal
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  // State For Column
  const [columnId, setColumnId] = useState<number>(0);
  // State For Column Status
  const [taskStatus, setTaskStatus] = useState<string>("");

  // Handle Add Column
  const handleAddColumn = (name: string, id: string) => {
    const newColumn: CompanyColumnType = {
      columnId: Date.now(),
      columnTitle: name,
      tasks: [],
    };

    handleCompanyData((current) =>
      current.map((item) =>
        item.companyId === +id
          ? { ...item, companyColumn: [...item.companyColumn, newColumn] }
          : item
      )
    );
  };

  const updateColumnEdit = (params: string, id: number, title: string) => {
    console.log(params, id, title);
    handleCompanyData((current) =>
      current.map((company) =>
        company.companyId === Number(params)
          ? {
              ...company,
              companyColumn: company.companyColumn.map((column) =>
                column.columnId === id
                  ? {
                      ...column,
                      columnTitle: title,
                      tasks: column.tasks.map((task) =>
                        task.taskStatus ? { ...task, taskStatus: title } : task
                      ),
                    }
                  : column
              ),
            }
          : company
      )
    );
  };

  // Handle Delete Column
  const handleDeleteColumn = (paramId: string, id: number, title: string) => {
    const isConfirm = window.confirm(
      `Are You Sure Wand Delete ${title} Column?`
    );

    if (isConfirm)
      handleCompanyData((current) =>
        current.map((company) =>
          company.companyId === Number(paramId)
            ? {
                ...company,
                companyColumn: company.companyColumn.filter(
                  (column, index) => column.columnId !== id
                ),
              }
            : company
        )
      );
  };

  // Handle Add Task
  const handleAddTask = (newTask: TasksType, paramsId: number) => {
    handleCompanyData((current) =>
      current.map((company) =>
        company.companyId === paramsId
          ? {
              ...company,
              companyColumn: company.companyColumn.map((column) =>
                column.columnId === columnId
                  ? {
                      ...column,
                      tasks: [...column.tasks, newTask],
                    }
                  : column
              ),
            }
          : company
      )
    );
  };

  // Handle Delete Task Item
  const handleDeleteTask = (
    title: string,
    paramId: number,
    columnId: number,
    taskId: number
  ) => {
    const isConfirm = window.confirm(
      `Are You Sure Want Delete Task With ${title} Title?`
    );

    if (isConfirm) {
      handleCompanyData((current) =>
        current.map((company) =>
          company.companyId === paramId
            ? {
                ...company,
                companyColumn: company.companyColumn.map((column) =>
                  column.columnId === columnId
                    ? {
                        ...column,
                        tasks: column.tasks.filter(
                          (task) => task.taskId !== taskId
                        ),
                      }
                    : column
                ),
              }
            : company
        )
      );
    }
  };

  const handleDragAndDrop = (
    paramId: number,
    columnId: number,
    taskId: number,
    newStatus: string
  ) => {
    handleCompanyData((current) =>
      current.map((company) =>
        company.companyId !== paramId
          ? company
          : {
              ...company,
              companyColumn: company.companyColumn.map((column) =>
                column.columnId !== columnId
                  ? column
                  : {
                      ...column,
                      tasks: column.tasks.map((task) =>
                        task.taskId !== taskId
                          ? task
                          : { ...task, taskStatus: newStatus }
                      ),
                    }
              ),
            }
      )
    );
  };
  return (
    <TaskContext.Provider
      value={{
        handleAddColumn,
        updateColumnEdit,
        handleDeleteColumn,
        isOpenModal,
        setIsOpenModal,
        taskStatus,
        setTaskStatus,
        handleAddTask,
        handleDeleteTask,
        columnId,
        setColumnId,
        handleDragAndDrop,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
