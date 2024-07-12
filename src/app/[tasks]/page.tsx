import TodoColumns from "../../../components/organisms/todoColumns/TodoColumns";
import Modal from "../../../components/organisms/modal/Modal";
import AddColumn from "./AddColumn";

export default function TasksPage({ params }: { params: { tasks: string } }) {
  return (
    <>
      <AddColumn tasks={params.tasks} />
      <Modal paramId={params.tasks} />
      <TodoColumns paramsId={params.tasks} />
    </>
  );
}
