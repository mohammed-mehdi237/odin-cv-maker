import { useState } from "react";
import "../styles/styles.css";
import { Input } from "./Input";

export const GeneralInfo = ({handleSave,showAccrodion,info}) => {
  const [fullName , setFullName] = useState(info.general.name);
  const [email , setEmail] = useState(info.general.email);
  const [phone , setPhone] = useState(info.general.phone);
  const [address , setAddress] = useState(info.general.address);


  return (
    <form >
      <Input title={"Full Name"} state={fullName} setState={setFullName}/>
      <Input title={"Email"} state={email} setState={setEmail}/>
      <Input title={"Phone Number"} state={phone} setState={setPhone}/>
      <Input title={"Address"} state={address} setState={setAddress} />
      <button type="submit" onClick={(e)=>{
      e.preventDefault();
      handleSave(fullName , email,phone , address);
      showAccrodion()
    }}>save</button>
    
    </form>
  );
};
