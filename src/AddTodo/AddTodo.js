import React from 'react'
import './AddTodo.css'

export default function AddTodo() {
    function handleChange() {
        
    }

    return  (
        <form className='addForm'>
            <input 
                className='addForm__input' 
                type='text'
                onChange='handleChange'
                >
            </input>
            <button className='addForm__button' type='submit'>Add</button>
        </form>
    )
}