


export const Input = ({title, placeholder}) =>{
  

  return(
    <div className="label-input">
      <label htmlFor="">{title}</label>
      <input type="text" placeholder={placeholder ? placeholder : title}/>
    </div>
  )
}