


export const Input = ({title, placeholder , type='text',state, setState }) =>{
  

  return(
    <div className="label-input">
      <label htmlFor="">{title}</label>
      <input
      type={type}
      placeholder={placeholder ? placeholder : title} 
      value={state}
      onChange={e=>setState(e.target.value)}
      
      />
    </div>
  )
}