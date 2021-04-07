import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from './productSlice';

export default function CartItem({product, index}) {
    const dispatch = useDispatch()
    return (
        <div className="cart-item">
            <div>
                <img src={product.img.thumb} alt={product.title} />
            </div>
            <div className="cart-item-details">
                <p>{product.title}</p>
                <p>{product.availableSizes[0]} | {product.style}</p>
                <p>Quantity: {product.quantity}</p>
            </div>
            <div>
                <span onClick={() => dispatch(removeFromCart(product.id))}>x</span>
                <p>{product.price}</p>
                <div className="cart-item-btns">
                    <button className="cart-item-btn" onClick={() => dispatch(decrementQuantity(index))}>-</button>
                    <button className="cart-item-btn" onClick={() => dispatch(incrementQuantity(index))}>+</button>
                </div>
            </div>
        </div>
    )
}