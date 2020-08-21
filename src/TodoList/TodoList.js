import React from 'react'
import './TodoList.css'
import ItemTodo from './ItemTodo.js'

export default function TodoList({ todos }) {
    
    return  (
        <div className='todos'>
            <h3 className='todos__title'>todos</h3>
            <ol className='todos__list'>
                {!todos 
                    ? null
                    : [...todos].map((todo, i) => {
                        return <ItemTodo todo={todo} key={i}/>
                })}
            </ol>
        </div>
    )
}