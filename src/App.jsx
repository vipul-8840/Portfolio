
import { useState } from 'react'
import './App.css'

function App() {
  const[count,setCount]=useState(0);

  return (
    <div className='bg-gray-300'>
      
        {count}
    </div>
  )
}

export default App
