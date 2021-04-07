import React from 'react';
import CartItem from './CartItem'
import { useSelector, useDispatch } from 'react-redux';
import { cartVisible, selectCart, selectSubTotal, selectCartVisible } from './productSlice'

export function Cart() {
    const dispatch = useDispatch()
    const cart = useSelector(selectCart)
    const subTotal = useSelector(selectSubTotal)
    const cartIsVisible = useSelector(selectCartVisible)
    return (
        <div>
            {/* dont actually do this - please use css! */}
            <a href="#" onClick={() => dispatch(cartVisible(true))} style={{top: 0, right: '50px', position: 'absolute'}}>open</a>
            {/* inline style that makes sense */}
            <div id="mySidenav" class="sidenav" style={{width: cartIsVisible ? '450px' : 0, padding: !cartIsVisible ? 0 : '20px'}}>
                <a class="closebtn" onClick={() => dispatch(cartVisible(false))}>&times;</a>
                {cart.map((cartItem, index) => {
                    return <CartItem product={cartItem} index={index} />
                })}
                {cart.length === 0 && cartIsVisible && <p>Add some items to cart yo!</p>}
                <div className="sidenav-bottom">
                    {cart.length > 0 && <h2 class="cart-item-footer">${subTotal}</h2>}
                </div>
            </div>
        </div>
    )
}