"use client";

import { useContext } from "react";

import AddData from "../../../components/organisms/addData/AddData";
import { TaskContext } from "../../../contexts/TaskProvider";

export interface AddDataProps {
  tasks: string;
}

export default function AddColumn({ tasks }: AddDataProps) {
  const { handleAddColumn } = useContext(TaskContext);

  return (
    <AddData
      handleAddData={(name) => handleAddColumn(name, tasks)}
      placeholder="Please Enter Column Name..."
    />
  );
}
