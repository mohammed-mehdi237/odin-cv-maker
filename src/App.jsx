import { useState } from 'react';
import { Info } from './components/Info';
import { Page } from './components/Page';


function App() {

  const [info , setInfo] = useState({
    general :{
      name:'',
      email:'',
      phone:'',
      address:''
    },
    education : {
      degree:'',
      university:'',
      city:'',
      country:'',
      startDate:'',
      endDate:''
    },
    work : {
      jobTitle:'',
      company:'',
      description:'',
      startDate:'',
      endDate:''
    }
  })



  const saveGeneralInfo = (newname,newemail,newphone,newaddress)=>{
    if(!newname || !newemail || !newphone || !newaddress) console.log('there is missing information')
    else{
    console.log(newname , newemail,newphone , newaddress)
    setInfo({...info, general:{
      name:newname,
      email:newemail,
      phone:newphone,
      address:newaddress
    }});
    }
  }

  return (
    <div className='main-container'>
      <Info 
        saveGeneralInfo={saveGeneralInfo}
        info={info}
      />
      <Page />
    </div>
  )
}

export default App
