import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectTodos,
  addTodo,
  removeTodo,
  toggleTodo,
  clearTodos,
  getTodosAsync,
} from './todoSlice'
export default () => {
  const dispatch = useDispatch()
  const todos = useSelector(selectTodos)
  const [todoText, setTodoText] = useState('')
  function handleSubmit(e) {
    e.preventDefault()
    dispatch(addTodo(todoText))
    setTodoText('')
  }
  return (
    <div>
      <button onClick={() => dispatch(getTodosAsync())}>async</button>
      <button onClick={() => dispatch(clearTodos())}>clear</button>
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
              onClick={() => dispatch(toggleTodo(todo.id))}
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
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              x
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
