import React from 'react'
import { useState } from 'react'


const TodoForm = ({addTodo}) => {
    const [value,setValue] = useState("")
    const handleSubmit= e =>{
        e.preventDefault();
        if (value){
        addTodo(value)
        setValue("")
        }
        // console.log(value)
    }
  return (
    <div>
      <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" className='todo-input'
        value={value} 
        placeholder='What is the task today?'
        onChange={(e)=>setValue(e.target.value)} />
        <button type='submit' className='todo-btn'>
            AddTask
        </button>

      </form>
    </div>
  )
}

export default TodoForm
