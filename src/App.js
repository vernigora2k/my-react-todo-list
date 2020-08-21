import React, { useEffect } from 'react';
import './App.css';
import Title from './Title/Title'
import AddTodo from './AddTodo/AddTodo'
import TodoList from './TodoList/TodoList'
import { useState } from 'react'


function App() {
  const [todos, setTodos] = useState(['some todo', 'another todo'])

  function handleChange(prop) {
    todos.push(prop)
    setTodos([...todos]) 
  }

  return (
    <div className="App">
      <Title/>
      <AddTodo 
        changeInput={handleChange}
      />
      <TodoList 
        todos={todos}
      />
    </div>
  );
}

export default App;
