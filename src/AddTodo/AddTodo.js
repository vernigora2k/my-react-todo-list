import React from 'react'
import './AddTodo.css'
import { useState } from 'react'

export default function AddTodo({ inputFormValue, changeInput }) {
    const [inputValue, setInputValue] = useState('')

    function handleChange(event) {
        // console.log(event.target.value)
        setInputValue(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(`hundleSubmit func ${inputValue}`)
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