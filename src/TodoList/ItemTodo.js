import React from 'react'

export default function ItemTodo({ inputFormValue }) {
    console.log({ inputFormValue })
    return (
        <li>{inputFormValue}</li>
    )
}