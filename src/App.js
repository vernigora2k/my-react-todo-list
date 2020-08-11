import React from 'react';
import './App.css';
import Title from './Title/Title'
import AddTodo from './AddTodo/AddTodo'
import TodoList from './TodoList/TodoList'
import { useState } from 'react'


function App() {
const [inputFormValue, setInputFormValue] = useState('temp')

function handleChange(prop) {
  console.log(prop)
  setInputFormValue(prop)
}

  return (
    <div className="App">
      <Title/>
      <AddTodo 
        inputFormValue={inputFormValue}
        changeInput={handleChange}
      />
      <TodoList/>
    </div>
  );
}

export default App;
