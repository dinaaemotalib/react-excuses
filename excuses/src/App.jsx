import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home/Home';
import Excuse from './Components/Excuse/Excuse';
import Leave from './Components/Leave/Leave'

function App() {
  const [count, setCount] = useState(0)

  return <>
     {/* <Home/>  */}   {/*this is the parent*/}
     <Excuse/>


    </>
    
  
}

export default App
