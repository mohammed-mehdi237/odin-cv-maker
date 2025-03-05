import { Education } from "./Education"
import { GeneralInfo } from "./GeneralInfo"
import { WorkExperience } from "./WorkExperience"


export const Info = () =>{

  return (
    <div className="info">
      <GeneralInfo />
      <Education />
      <WorkExperience />
    </div>
  )
}