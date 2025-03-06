import { useState } from "react";
import "../styles/styles.css";
import { Input } from "./Input";

export const GeneralInfo = () => {
  const [fullName , setFullName] = useState('');
  const [email , setEmail] = useState('');
  const [phone , setPhone] = useState('');
  const [address , setAddress] = useState('');


  return (
    <form >
      <Input title={"Full Name"} state={fullName} setState={setFullName}/>
      <Input title={"Email"} state={email} setState={setEmail}/>
      <Input title={"Phone Number"} state={phone} setState={setPhone}/>
      <Input title={"Address"} state={address} setState={setAddress}/>
      <button type="submit" onClick={(e)=>{
      e.preventDefault();
      console.log(fullName , email , phone , address)
    }}>save</button>
    </form>
  );
};
