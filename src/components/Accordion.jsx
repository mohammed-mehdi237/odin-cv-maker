import {FaCaretDown,FaCaretRight} from "react-icons/fa"
import '../styles/styles.css'

export const Accordion = ({Icon , Category , title, handleClick , showTitle}) =>{
  const isClicked = title === showTitle;
  return(
    <div className="input-group">
      <div className="header" 
        onClick={() => {
          handleClick(title)
          console.log(`click ${title}`)
        }}
      >
        <div className="header-title">
          <Icon />
          <h2>{title}</h2>
        </div>
      {!isClicked? <FaCaretRight/> :
      <FaCaretDown/>}
      </div>

        {isClicked && <Category />}
        
    </div>
  )
}