import React, { useState } from 'react'
import { addTodo } from '../Features/TodoSlice'
import { useDispatch } from 'react-redux'


function AddTodo() {

  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input))

    setInput('') // just for cleaing purposes - not necessary
  }

  return (
    <>
      <div className='flex justify-right ml-60'>
        <form onSubmit={addTodoHandler}>
          <input
            className='bg-gray-800 p-2 mt-6 rounded-l-lg w-96 outline-none'
            type="text"
            placeholder='Write Here !!!'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className='bg-gray-900 p-2 rounded-r-lg w-20 hover:bg-gray-600'
          >Add</button>
        </form>
      </div>
    </>

  )
}

export default AddTodo