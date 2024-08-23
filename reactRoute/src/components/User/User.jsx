import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

  const {userId} = useParams();

  return (
    <div className='bg-orange-400 text-white text-2xl p-4 m-4'>User: {userId}</div>
  )
}

export default User