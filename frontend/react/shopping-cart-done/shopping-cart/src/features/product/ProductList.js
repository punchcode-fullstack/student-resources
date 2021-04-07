import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product from './Product'
import {
  getProducts,
  selectCount,
  selectProducts
} from './productSlice';
import styles from './Product.module.css';

export function ProductList() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  // const [products, setProducts] = useState([])

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (
    <div className="product-grid">
      {products.map(product => <Product product={product} />)}
    </div>
  );
}
