import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { ProductList } from './features/product/ProductList';
import { Cart } from './features/product/Cart';
import { Sizes } from './features/product/Sizes';
import './App.css';

function CountButton() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/products')
    .then(r => r.json())
    .then(data => {
      setProducts(data)
      // console.log(data)
    })
  }, [])
  // console.log(useState(0))
  function handleClick() {
    setCount(count + 1)
  }
  return <div>
    <button onClick={handleClick}>{count}</button>
    <input type="text" onChange={(e) => setText(e.target.value)}/>
    {products.map(product => <p>{product.title}</p>)}
  </div>
}

function App() {
  return (
    <div>
      {/* <Counter /> */}
      <Sizes />
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
