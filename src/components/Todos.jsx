import { useState } from "react";

function Todos({todos, onAdd, onDelete}) {
    const [newTodo, setNewTodo] = useState('');
    const handleAdd = () => {
        if (newTodo.trim() !=='') {
            onAdd(newTodo);
            setNewTodo('');
        }
    }
    return (
        <>
        <h1>Ma To-Do List</h1>

        <div>
            <input type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Nouvelle Tache" 
            />
            <button onClick={handleAdd}>Ajouter une tache</button>
        </div>

        <ul>
            {todos.map(todo => (
                <li key={todo.id}>{todo.label}
                <button onClick={() => onDelete(todo.id)}>Supprimer</button>
                </li>
            ))}
        </ul>
        </>
    )
}

export default Todos;