import React from 'react'
import './AddTodo.css'

export default function AddTodo() {
    return  (
        <form className='addForm'>
            <input className='addForm__input' type='text'></input>
            <button className='addForm__button' type='submit'>Add</button>
        </form>
    )
}