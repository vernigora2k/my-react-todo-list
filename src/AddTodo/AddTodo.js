import React from 'react'
import './AddTodo.css'
import { useState } from 'react'

export default function AddTodo({ changeInput }) {
    
    const [inputValue, setInputValue] = useState('')

    function handleChange(event) {
        setInputValue(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (!inputValue) return null
        changeInput(inputValue.toLowerCase())
    }

    return  (
        <form 
            className='addForm'
            onSubmit={handleSubmit}
        >
            <input 
                className='addForm__input' 
                type='text'
                onChange={handleChange}
                placeholder='some todo'
                >
            </input>
            <button className='addForm__button' type='submit'>Add</button>
        </form>
    )
}