import { FaBriefcase, FaSchool, FaUser } from "react-icons/fa"
import { Accordion } from "./Accordion"
import { Education } from "./Education"
import { GeneralInfo } from "./GeneralInfo"
import { WorkExperience } from "./WorkExperience"
import { useState } from "react"


export const Info = ({saveGeneralInfo,info }) =>{

  const [showTitle , setShowTitle] = useState('');

  const handleAccordionClick = (title) =>{
    title===showTitle ? setShowTitle('') : setShowTitle(title)
    console.log(`click ${title}`)
  }

  return (
    <div className="info">
      <Accordion 
        Icon={FaUser}
        Category={GeneralInfo}
        title={'General Info'}
        handleClick={handleAccordionClick}
        showTitle={showTitle}
        info={info}
        handleSave={saveGeneralInfo}
      />
      <Accordion 
        Icon={FaSchool}
        Category={Education}
        title={'Education'}
        handleClick={handleAccordionClick}
        showTitle={showTitle}
        info={info}
      />
      <Accordion
        Icon={FaBriefcase}
        Category={WorkExperience}
        title={'Work Experience'}
        handleClick={handleAccordionClick}
        showTitle={showTitle}
        info={info}
      />
    </div>
  )
}