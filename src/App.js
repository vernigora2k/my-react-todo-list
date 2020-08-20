import React, { useEffect } from 'react';
import './App.css';
import Title from './Title/Title'
import AddTodo from './AddTodo/AddTodo'
import TodoList from './TodoList/TodoList'
import { useState } from 'react'


function App() {
  const [inputFormValue, setInputFormValue] = useState(['some todo', 'another todo'])

  function handleChange(prop) {
    inputFormValue.push(prop)
    setInputFormValue(inputFormValue) 
    console.log(inputFormValue)  
  }

  return (
    <div className="App">
      <Title/>
      <AddTodo 
        changeInput={handleChange}
      />
      <TodoList 
        inputFormValue={inputFormValue}
      />
    </div>
  );
}

export default App;
