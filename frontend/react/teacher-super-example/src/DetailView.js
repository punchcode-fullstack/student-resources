import { Link } from 'react-router-dom'
import { useState } from 'react'
import ObjectViewer from './ObjectViewer'

const myListOfProducts = [
    {
        id: 1,
        name: 'heelies',
        price: 22
    },
    {
        id: 2,
        name: 'ipad',
        price: 10
    }
]

export default function DetailView(props) {
    console.log('router props =>', props)
    const [myProduct, setProduct] = useState(myListOfProducts[0])
    return (
      <div>
          <h2>DetailView</h2>
          <Link to="/">Go To Home Page</Link>
          <p>{myProduct.name}</p>

          <ObjectViewer label={'props match object'} object={props.match} />
      </div>
    );
  }