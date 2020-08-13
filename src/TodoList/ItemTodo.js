import React from 'react'
import './ItemTodo.css'

export default function ItemTodo({ todo }) {
    function handleClose(event) {
        event.preventDefault()
        event.target.parentNode.parentNode.style.display='none'
    }

    return (
        <li>
            <div className='todoItem'>
                {todo}
                <button 
                    className='todoItem__btnClose' 
                    onClick={handleClose}>
                    Close
                </button>
            </div>
        </li>
    )
}