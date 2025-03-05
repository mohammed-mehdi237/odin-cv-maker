import "../styles/styles.css";
import { Input } from "./Input";

export const WorkExperience = () => {
  return (
    <>
      <Input title={"Job title"} />
      <Input title={"Company"} />
      <div className="dates">
      <Input title={"Start Date"} />
      <Input title={"End Date"} />
      </div>
      <Input title={"Description"} />
    </>
  );
};
