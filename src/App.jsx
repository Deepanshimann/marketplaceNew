import { useState } from 'react'
import Navbar from './customer/component/navigation/Navbar'
import './App.css'
import Homepage from './customer/component/pages/Homepage/Homepage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <Navbar/>
    </div>
     <div>
      <Homepage/>
     </div>
    </>
  )
}

export default App
