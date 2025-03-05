import "../styles/styles.css";
import { Input } from "./Input";

export const Education = () => {
  return (
    <>
      <Input title={"Degree"} />
      <Input title={"University"} />
      <Input title={"City"} />
      <Input title={"Country"} />
      <div className="dates">
        <Input title={"Start Date"} type="date"/>
        <Input title={"End Date"} type="date"/>

      </div>
    </>
  );
};
