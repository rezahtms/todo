
// Task Type
export interface TasksType {
  taskId: number,
  taskTitle: string,
  taskStatus: string,
  taskAssigned: string,
  taskDefined: string
};

// Company Column Type
export interface CompanyColumnType {
  columnId: number,
  columnTitle: string,
  tasks: TasksType[],
};

// Company Type 
export interface CompanyType {
  companyId: number,
  companyName: string,
  companyColumn: CompanyColumnType[],
};

export interface EditStateType {
  edit: boolean,
  item: {
    id: number,
    value: string
  }
}

// Task Column Type
export interface TaskColumnType {
  columnId: number;
  columnTitle: string;
  status: string;
  tasks: CompanyColumnType[];
}