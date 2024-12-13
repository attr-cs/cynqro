import { useState } from 'react'
import './App.css'
import { io } from 'socket.io-client'

function App() {
  const socket = io("http://localhost:4000");

  return (
    <>
      This is Cynqro
    </>
  )
}

export default App
