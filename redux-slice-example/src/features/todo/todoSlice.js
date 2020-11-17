import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Math.random(),
        title: action.payload,
        completed: false,
      })
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    toggleTodo: (state, action) => {
      const index = state.todos.findIndex((x) => x.id === action.payload)
      state.todos[index].completed = !state.todos[index].completed
    },
    asyncTodo: (state, action) => {
      state.todos = action.payload
    },
    clearTodos: (state, action) => {
      state.todos = []
    },
  },
})

export const { addTodo, removeTodo, toggleTodo, clearTodos } = todoSlice.actions

const { asyncTodo } = todoSlice.actions

export const getTodosAsync = () => (dispatch) => {
  axios
    .get('https://jsonplaceholder.typicode.com/todos')
    .then((resp) => dispatch(asyncTodo(resp.data)))
}

export const selectCount = (state) => state.todo.value
export const selectTodos = (state) => state.todo.todos
export default todoSlice.reducer
