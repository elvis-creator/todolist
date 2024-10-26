import React, { useState } from 'react'
import axios from "axios";


const Todolist = () => {
  
  const [ todos, setTodos]= useState([])
  

  const fetchData= async  ()=> {
  const response= await axios.get('https://jsonplaceholder.typicode.com/todos')
  const data = response.data
  setTodos(data)
  console.log("data", data);
  

  }
  fetchData()
  return (
    <div>
      Helloworld
    </div>
  )
}

export default Todolist
