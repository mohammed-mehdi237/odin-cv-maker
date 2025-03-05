import { useState } from "react"
import { FaArrowRight,FaArrowDown } from "react-icons/fa"
import '../styles/styles.css'
import { Input } from "./Input"

export const GeneralInfo = () =>{
  const [isClicked , setIsClicked] = useState(false)

  return(
    <div className="general-info input-group">
      <div className="header">
        <h2>General Info</h2>
      {!isClicked? <FaArrowRight
        onClick={() => {
          setIsClicked(!isClicked)
          console.log('click')
        }}
      /> :
      <FaArrowDown
        onClick={() => {
          setIsClicked(!isClicked)
          console.log('click')
        }}
      />}
      </div>

        {isClicked? <>
        <Input  title={'Full Name'} />
        <Input  title={'Email'}/>
        <Input  title={'Phone Number'}/>
        <Input  title={'Address'}/>
        </> : <></>}
        
    </div>
  )
}