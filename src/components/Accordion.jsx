import { useState } from "react"
import {FaCaretDown,FaCaretRight,FaSchool } from "react-icons/fa"
import '../styles/styles.css'
import { Input } from "./Input"

export const Accordion = ({Icon , Category , title}) =>{
  const [isClicked , setIsClicked] = useState(false)

  return(
    <div className="input-group">
      <div className="header">
        <div className="header-title">
          <Icon />
          <h2>{title}</h2>
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

        {isClicked? <Category /> : <></>}
        
    </div>
  )
}