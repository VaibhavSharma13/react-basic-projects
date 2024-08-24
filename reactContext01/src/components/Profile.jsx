import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {

    const {user} = useContext(UserContext)

    if(!user) return <div>Please Login</div>

  return (
    <>
    <p style={{color: 'orange', fontSize:'20px'}}>Welcome {user.username}</p>
    </>
  )
}

export default Profile