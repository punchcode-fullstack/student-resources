import React, { useState } from 'react'
import { useTodo } from './todo2Slice'
export default () => {
  const {
    todos,
    addTodo,
    removeTodo,
    toggleTodo,
    clearTodos,
    getTodosAsync,
  } = useTodo()
  const [todoText, setTodoText] = useState('')
  function handleSubmit(e) {
    e.preventDefault()
    addTodo(todoText)
    setTodoText('')
  }
  return (
    <div>
      <button onClick={() => getTodosAsync()}>async</button>
      <button onClick={() => clearTodos()}>clear</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
      </form>
      <ul>
        {todos.map((todo) => (
          <li>
            <input
              type="checkbox"
              checked={todo.completed}
              onClick={() => toggleTodo(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            >
              {todo.title}
            </span>
            <span
              style={{ marginLeft: '10px' }}
              onClick={() => removeTodo(todo.id)}
            >
              x
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
