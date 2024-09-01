import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../Features/TodoSlice'


function Todos() {

  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div className='flex justify-start mt-4 ml-60 text-2xl'>Todos</div>
      {todos.map((todo) => (
        <li
          className='ml-60 mt-4 list-none bg-slate-500 p-1 w-96 rounded-lg'
          key={todo.id}>
          {todo.text}
          <button
            className='bg-green-500 pl-2 pr-2'
            onClick={() => {
              dispatch(updateTodo(todo))
            }}>!</button>
          <button
            className='bg-red-500 pl-2 pr-2'
            onClick={() => {
              dispatch(removeTodo(todo.id))
            }}>X</button>
        </li>
      ))}
    </>
  )
}

export default Todos