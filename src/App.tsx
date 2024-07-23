import { useState } from "react";
import { ITask, TaskContainer } from "./components";
import { FormNewTask } from "./components/FormNewTask";
import { ITaskSection, TaskSection } from "./components/TaskSection";

function App() {
  const [selectedSection, setSelectedSection] = useState<number>(2);
  const [sectionList, setSectionList] = useState<ITaskSection[]>([]);
  const [title, setTitle] = useState<string>("");
  const [taskList, setTaskList] = useState<ITask[]>([]);
  console.log(taskList);
  return (
    <div className="grid grid-cols-7 py-5 px-10 gap-6 h-screen w-11/12 mx-auto">
      <div className="col-span-2">
        <FormNewTask
          selectedSection={selectedSection}
          taskList={taskList}
          setTaskList={setTaskList}
        />
        <div className="mt-3">
          <form
            className="bg-slate-100 w-3/2 pl-3 pr-5 rounded-b-xl mb-2 shadow-lg"
            onSubmit={(e) => {
              e.preventDefault();
              const newSection = {
                title,
                section_id: Date.now(),
                last_opened: Date.now(),
              };
              console.log(newSection);
              setSectionList([...sectionList, newSection]);
              setTitle("");
              setSelectedSection(newSection.section_id);
            }}
          >
            <input
              type="text"
              placeholder="+ New Section"
              className="bg-slate-100 w-full py-4 rounded-bl-xl opacity-90 font-semibold focus:outline-none"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </form>
          {sectionList.map((section) => (
            <TaskSection
              taskSection={section}
              key={section.section_id}
              setSelectedSection={setSelectedSection}
              selectedSection={selectedSection}
            />
          ))}
        </div>
      </div>
      <div className="col-span-5 bg-yellow-100 rounded-lg shadow-md h-full grid grid-cols-2 gap-5 p-5">
        <TaskContainer
          taskList={taskList}
          setTaskList={setTaskList}
          title="On Going"
          tasks={taskList.filter(
            (task) =>
              task.status === false && task.section_id === selectedSection
          )}
        />
        <TaskContainer
          taskList={taskList}
          setTaskList={setTaskList}
          title="Completed"
          tasks={taskList.filter(
            (task) =>
              task.status === true && task.section_id === selectedSection
          )}
        />
      </div>
    </div>
  );
}

export default App;
