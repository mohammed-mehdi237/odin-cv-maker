import { useState } from 'react';
import { Info } from './components/Info';
import { Page } from './components/Page';


function App() {
  const [colour , setColor] = useState(false)

  return (
    <div className='main-container'>
      <Info />
      <Page />
    </div>
  )
}

export default App
