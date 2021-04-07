import { useState, useEffect } from "react"

export default function RequestExample(props) {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/todos'
        const otherUrl = 'http://localhost:3001/products'
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setTodos(data)
        })
    }, [])
    return <div>
        <ul>
            {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
        </ul>
    </div>
}