function Todos({todos}) {

    console.log(todos)
    return (
        <>
        <h1>Ma To-Do List</h1>
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>{todo.label}</li>
            ))}
        </ul>
        </>
    )
}

export default Todos;