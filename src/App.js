import React from 'react';
import './App.css';
import Title from './Title/Title'
import AddTodo from './AddTodo/AddTodo'
import TodoList from './TodoList/TodoList'


function App() {
  return (
    <div className="App">
      <Title/>
      <AddTodo/>
      <TodoList/>
    </div>
  );
}

export default App;
