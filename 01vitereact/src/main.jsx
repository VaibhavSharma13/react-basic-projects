import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
      <h2>inside my app function</h2>
    )
  }

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)


ReactDOM.createRoot(document.getElementById('root')).render(
    // anotherElement
    // <MyApp />
    <App />
)
