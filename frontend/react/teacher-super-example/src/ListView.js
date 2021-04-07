import { useState } from 'react';
import { Link } from 'react-router-dom';
import ObjectViewer from './ObjectViewer'
const myListOfProducts = [
    {
        id: 1,
        name: 'heelies',
        price: 22,
    },
    {
        id: 2,
        name: 'ipad',
        price: 10
    }
]

export default function ListView(props) {
  const [myList, setMyList] = useState(myListOfProducts)
  return (
    <div>
        <h2>ListView</h2>
        
        <Link to="/product/1">Go To Product Detail Page with 1</Link>

        <ul>
            {myList.map(item => {
                return <li key={item.id}>{item.name}</li>
            })}
        </ul>

        <ObjectViewer label={'props object'} object={props} />
    </div>
  );
}