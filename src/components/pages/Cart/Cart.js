import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Home/Card';
import './Cart.css'
const Cart = () => {

    const cartProduct = useSelector(state => state.cart)
    return (
        <div className='productContainer'>

            {cartProduct.map(product => <Card product={product} />)}

        </div>
    );
};

export default Cart;