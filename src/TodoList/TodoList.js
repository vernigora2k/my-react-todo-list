import React from 'react'
import './TodoList.css'
import ItemTodo from './ItemTodo.js'

export default function TodoList({ inputFormValue }) {
    
    return  (
        <div className='todos'>
            <h3 className='todos__title'>todos</h3>
            <ol className='todos__list'>

                {!inputFormValue 
                    ? null
                    : [...inputFormValue].map((todo, i) => {
                        return <ItemTodo todo={todo} key={i}/>
                })}

                {/* {[...inputFormValue].map((todo, i) => {
                        console.log(todo)
                    return <ItemTodo todo={todo} key={i}/>
                })} */}

            </ol>
        </div>
    )
}