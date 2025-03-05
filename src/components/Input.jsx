


export const Input = ({title, placeholder , type='text'}) =>{
  

  return(
    <div className="label-input">
      <label htmlFor="">{title}</label>
      <input type={type} placeholder={placeholder ? placeholder : title}/>
    </div>
  )
}