import "../styles/styles.css";
import { Input } from "./Input";

export const WorkExperience = () => {
  return (
    <>
      <Input title={"Job title"} />
      <Input title={"Company"} />
      <div className="dates">
      <Input title={"Start Date"} type="date"/>
      <Input title={"End Date"} type="date"/>
      </div>
      <Input title={"Description"} />
    </>
  );
};
