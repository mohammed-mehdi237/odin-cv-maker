import { useState } from "react"
import {FaCaretDown,FaCaretRight,FaSchool } from "react-icons/fa"
import '../styles/styles.css'
import { Input } from "./Input"

export const Education = () =>{
  const [isClicked , setIsClicked] = useState(false)

  return(
    <div className="input-group">
      <div className="header">
        <div className="header-title">
          <FaSchool />
          <h2>Education</h2>
        </div>
      {!isClicked? <FaCaretRight
        onClick={() => {
          setIsClicked(!isClicked)
          console.log('click')
        }}
      /> :
      <FaCaretDown
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