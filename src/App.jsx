import { useState } from 'react'
import './App.css'
import Todolist from './components/todolist/todolist'
import Todolistform from './components/todolistform/todolistform'
import Gallery from './components/gallery/gallery'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Todolist/> */}
    {/* <Todolistform/> */}
    <Gallery/>
    </>
  )
}

export default App
