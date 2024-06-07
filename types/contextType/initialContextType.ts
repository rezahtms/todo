
import { initialCompanyType } from "../stateType/initialStateType";
import { TasksType } from "../stateType/statesType";
import { TaskContextType, TodoContextType } from "./contextsType";

// initial Todo Context 
export const initialTodoContext: TodoContextType = {
  inputValue: '',
  setInputValue: (value: string) => { },
  companyData: [initialCompanyType],
  handleCompanyData: () => { },
  handleAddCompany: () => { },
  handleDeleteCompanyItem: (id: number, title: string) => { },
  isEdit: { edit: false, item: { id: 0, value: '' } },
  setIsEdit: () => { },
  handleEditCompany: () => { }

};


// Initial TaskContext 
export const initialTaskContext: TaskContextType = {
  handleAddColumn: (id: string) => { },
  updateColumnEdit: (params: string) => { },
  handleDeleteColumn: (paramId: string, id: number, title: string) => { },
  isOpenModal: false,
  setIsOpenModal: () => { },
  taskStatus: '',
  setTaskStatus: () => { },
  handleAddTask: (newTask: TasksType, paramId: number) => { },
  handleDeleteTask: (
    title: string,
    paramId: number,
    columnId: number,
    taskId: number) => { },
  columnId: 0,
  setColumnId: () => { },
  handleDragAndDrop: (
    paramId: number,
    columnId: number,
    taskId: number,
    newStatus: string
  ) => { }
}
