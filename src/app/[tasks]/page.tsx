"use client";
import { useContext } from "react";
import AddData from "../../../components/organisms/addData/AddData";
import { TaskContext } from "../../../contexts/TaskProvider";
import TodoColumns from "../../../components/organisms/todoColumns/TodoColumns";
import Modal from "../../../components/organisms/modal/Modal";

const TasksPage = ({ params }: { params: { tasks: string } }) => {
  const { handleAddColumn } = useContext(TaskContext);

  return (
    <>
      <AddData
        handleAddData={(name) => handleAddColumn(name, params.tasks)}
        placeholder="Please Enter Column Name..."
      />
      <Modal paramId={params.tasks} />
      <TodoColumns paramsId={params.tasks} />
    </>
  );
};

export default TasksPage;
