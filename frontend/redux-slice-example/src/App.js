import React from 'react'
import logo from './logo.svg'
import { Counter } from './features/counter/Counter'
import Todo from './features/todo/Todo'
import Todo2 from './features/todo2/Todo2'
import './App.css'

function App() {
  return (
    <div className="App">
      <Todo />
      <Todo2 />
    </div>
  )
}

export default App
