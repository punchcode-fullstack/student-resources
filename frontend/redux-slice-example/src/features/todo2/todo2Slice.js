import { createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

export const todo2Slice = createSlice({
  name: 'todo2',
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

const {
  addTodo,
  removeTodo,
  toggleTodo,
  asyncTodo,
  clearTodos,
} = todo2Slice.actions

const getTodosAsync = () => (dispatch) => {
  axios
    .get('https://jsonplaceholder.typicode.com/todos')
    .then((resp) => dispatch(asyncTodo(resp.data)))
}

export const useTodo = () => {
  const todos = useSelector((state) => state.todo2.todos)
  const dispatch = useDispatch()
  return {
    todos,
    addTodo: (text) => dispatch(addTodo(text)),
    removeTodo: (id) => dispatch(removeTodo(id)),
    toggleTodo: (id) => dispatch(toggleTodo(id)),
    clearTodos: () => dispatch(clearTodos()),
    getTodosAsync: () => dispatch(getTodosAsync()),
  }
}

export default todo2Slice.reducer
