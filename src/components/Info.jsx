import { FaBriefcase, FaSchool, FaUser } from "react-icons/fa"
import { Accordion } from "./Accordion"
import { Education } from "./Education"
import { GeneralInfo } from "./GeneralInfo"
import { WorkExperience } from "./WorkExperience"


export const Info = () =>{

  return (
    <div className="info">
      <Accordion 
        Icon={FaUser}
        Category={GeneralInfo}
        title={'General Info'}
      />
      <Accordion 
        Icon={FaSchool}
        Category={Education}
        title={'Education'}
      />
      <Accordion
        Icon={FaBriefcase}
        Category={WorkExperience}
        title={'Work Experience'}
      />
    </div>
  )
}