import React from 'react'
import './ItemTodo.css'
import { createPortal } from 'react-dom'

export default function ItemTodo({ todo }) {
    function handleClose(event) {
        event.preventDefault()
        console.log(event.target.parentNode.parentNode)
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