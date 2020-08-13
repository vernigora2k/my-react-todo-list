import React, { useEffect } from 'react';
import './App.css';
import Title from './Title/Title'
import AddTodo from './AddTodo/AddTodo'
import TodoList from './TodoList/TodoList'
import { useState } from 'react'


function App() {
  const set = new Set(['take a cafe', 'make a dill'])
  const [inputFormValue, setInputFormValue] = useState(set)

  function handleChange(prop) {
    setInputFormValue(inputFormValue.add(prop))
  }

  return (
    <div className="App">
      <Title/>
      <AddTodo 
        inputFormValue={inputFormValue}
        changeInput={handleChange}
      />
      <TodoList 
        inputFormValue={inputFormValue}
      />
    </div>
  );
}

export default App;
