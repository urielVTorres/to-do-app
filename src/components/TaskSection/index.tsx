import { SetStateAction } from "react";

export interface ITaskSection {
  title: string;
  section_id: number;
  last_opened: number;
}

interface Props {
  taskSection: ITaskSection;
  setSelectedSection: React.Dispatch<SetStateAction<number>>;
  selectedSection: number;
}

export const TaskSection = ({
  taskSection,
  setSelectedSection,
  selectedSection,
}: Props) => {
  return (
    <div
      className={`${
        selectedSection === taskSection.section_id
          ? "bg-yellow-100 opacity-90"
          : "bg-slate-200"
      } w-3/2 p-3 rounded-b-xl shadow-sm font-bold`}
      onClick={() => setSelectedSection(taskSection.section_id)}
    >
      <h1>{taskSection.title}</h1>
    </div>
  );
};
