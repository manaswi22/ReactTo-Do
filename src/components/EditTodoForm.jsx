import React from 'react'
import { useState } from 'react'

const EditTodoForm = ({editTodo,task}) => {
  const [value, setValue]=useState(task.task || '')  

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(value.trim()===''){
      return;
    }
    editTodo(value,task.id)
    setValue('')
  }
  return (
    <form onSubmit={handleSubmit} className='TodoForm'>
      <input type="text" value={value}
      onChange={(e)=>setValue(e.target.value)} className='todo-input' placeholder='Update task' />
      <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}

export default EditTodoForm
