import { useState } from "react";
import { ITask } from "../Task";

interface Props {
  selectedSection: number;
  taskList: ITask[];
  setTaskList: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export const FormNewTask = ({
  selectedSection,
  taskList,
  setTaskList,
}: Props) => {
  const [taskText, setTaskText] = useState<string>("");
  return (
    <form
      className="border-2 border-gray-300 shadow-md px-8 py-4 rounded-md"
      onSubmit={(e) => {
        e.preventDefault();
        const newTask: ITask = {
          id: Date.now(),
          text: taskText,
          status: false,
          section_id: selectedSection,
        };
        setTaskList([...taskList, newTask]);
        setTaskText("");
      }}
    >
      <label htmlFor="input-task" className="block text-lg">
        Task
      </label>
      <input
        id="input-task"
        type="text"
        placeholder="Write your task"
        className="border-2 rounded-lg px-4 py-2 w-full mt-2"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <div className="w-full flex gap-5 justify-center mt-5">
        <button
          className="p-2"
          onClick={(e) => {
            e.preventDefault();
            setTaskText("");
          }}
        >
          Cancel
        </button>
        <button className="px-3 bg-slate-800 text-white rounded-lg">Add</button>
      </div>
    </form>
  );
};
