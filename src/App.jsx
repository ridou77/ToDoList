import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './components/Todos'

function App() {

  const [todos, setTodos] = useState([
    {id:'1', label: "Faire ses devoirs"},
    {id:'2', label: "Faire l'AP2"},
    {id:'3', label: "Faire ses courses"}
  ])

  const ajouterTache = (texte) => {
    const nouvelleTache = {
      id: Date.now().toString(),
      label: texte
    };
    setTodos([...todos, nouvelleTache]);
  };

  const supprimerTache = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <>
      <Todos todos={todos} onAdd={ajouterTache} onDelete={supprimerTache} />
    </>
  )
}

export default App
