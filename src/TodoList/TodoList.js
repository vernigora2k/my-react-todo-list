import React from 'react'
import './TodoList.css'
import ItemTodo from './ItemTodo.js'

export default function TodoList({ inputFormValue }) {
    console.log(inputFormValue)
    return  (
        <div className='todos'>
            <h3 className='todos__title'>todos</h3>
            <ol className='todos__list'>
                {/* <ItemTodo inputFormValue={inputFormValue}/> */}
                
            </ol>
        </div>
    )
}