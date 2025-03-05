import { useState } from "react"
import {FaCaretDown,FaCaretRight,FaUser } from "react-icons/fa"
import '../styles/styles.css'
import { Input } from "./Input"

export const GeneralInfo = () =>{
  const [isClicked , setIsClicked] = useState(false)

  return(
    <div className="general-info input-group">
      <div className="header">
        <div className="header-title">
          <FaUser />
          <h2>General Info</h2>
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