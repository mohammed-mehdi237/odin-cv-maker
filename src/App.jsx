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

  return (
    <div className='main-container'>
      <Info />
      <Page />
    </div>
  )
}

export default App
