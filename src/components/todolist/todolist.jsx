import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './todolist.css';

const Todolist = () => {
  const [todos, setTodos] = useState([]);

  const fetchData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    const data = response.data;
    setTodos(data);
    console.log("data", data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="todolist-container">
      {todos && todos.map((todo) => (
        <div key={todo.id} className="todo-item">
          <h1 className="todo-title">{todo.title}</h1>
          <p className="todo-status">{todo.completed ? 'Completed' : 'Not Completed'}</p>
        </div>
      ))}
    </div>
  );
};

export default Todolist;
