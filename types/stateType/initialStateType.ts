import { EditStateType } from "./statesType"


// initial Task Type 
export const initialTaskType = {
  taskId: 0,
  taskTitle: '',
  taskStatus: '',
  taskAssigned: '',
  taskDefined: ''
}

// initial Company Column Type
export const initialCompanyColumnType = {
  columnId: 0,
  columnTitle: '',
  tasks: [initialTaskType],
}

//  initial Company Type
export const initialCompanyType = {
  companyId: 0,
  companyName: '',
  companyColumn: [initialCompanyColumnType],
}

export const initialEditStateType: EditStateType = {
  edit: false,
  item: {
    id: 0,
    value: ''
  }
}