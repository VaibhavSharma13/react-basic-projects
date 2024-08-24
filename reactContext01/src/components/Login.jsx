import React, { useState } from 'react'
import { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const {setUser} = useContext(UserContext)

  const handleClick = (e) => {
    e.preventDefault()
    setUser({username, password})

  }

  return (
    <>
      <input 
      type="text"
      placeholder='Username'
      value={username}
      onChange={(e) => setUsername(e.target.value) }
      style={{padding: '4px', margin: '5px', borderRadius: '5px'}}
      />
      <input 
      type="text"
      placeholder='password'
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      style={{padding: '4px', margin: '5px', borderRadius: '5px'}}
      />
      <button
      onClick={handleClick}
      style={{ backgroundColor: 'green', color: 'white', margin: '5px' }}
      >Submit</button>
    </>
  )
}

export default Login