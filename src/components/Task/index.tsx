export interface ITask {
  id: number;
  text: string;
  status: boolean;
  section_id: number;
}

interface Props {
  task: ITask;
  taskList: ITask[];
  setTaskList: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export const Task = ({ task, taskList, setTaskList }: Props) => {
  return (
    <div className="flex justify-between p-3">
      <div
        className="border-2 border-slate-700 rounded-md relative"
        onClick={() => {
          const modifiedTask = task;
          modifiedTask.status = !modifiedTask.status;
          const newList = taskList.map((obj) =>
            obj.id === task.id ? modifiedTask : obj
          );
          setTaskList(newList);
        }}
      >
        <div
          className={`border-2 rounded-md bg-lime-400 w-5 h-5 ${
            !task.status ? "invisible" : ""
          }`}
        ></div>
      </div>
      <span
        className={`truncate w-full ml-3 ${task.status ? "line-through" : ""}`}
      >
        {task.text}
      </span>
      <a
        className="opacity-0 hover:opacity-60 cursor-pointer "
        onClick={() => {
          const newList = taskList.filter((t) => t.id !== task.id);
          setTaskList(newList);
        }}
      >
        ✕
      </a>
    </div>
  );
};
