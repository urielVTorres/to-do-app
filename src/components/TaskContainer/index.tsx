import { ITask, Task } from "../Task";

interface Props {
  title: string;
  tasks?: ITask[];
  taskList: ITask[];
  setTaskList: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export const TaskContainer = ({
  title,
  tasks,
  taskList,
  setTaskList,
}: Props) => {
  return (
    <div className="bg-yellow-50 rounded-lg shadow-md py-5 px-8 opacity-90">
      <h1 className="text-center uppercase font-bold text-xl mb-2">{title}</h1>
      <hr></hr>
      <section>
        {tasks?.map((task) => (
          <Task
            taskList={taskList}
            setTaskList={setTaskList}
            task={task}
            key={task.id}
          />
        ))}
      </section>
    </div>
  );
};
