import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import todoReducer from '../features/todo/todoSlice'
import todo2Reducer from '../features/todo2/todo2Slice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    todo2: todo2Reducer,
  },
})
