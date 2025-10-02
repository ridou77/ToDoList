import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './components/Todos'

function App() {

  const todos = [
    {id:'1', label: "Faire ses devoirs"},
    {id:'2', label: "Faire l'AP2"},
    {id:'3', label: "Faire ses courses"}
  ]

  return (
    <>
      <Todos todos={todos} />
    </>
  )
}

export default App
