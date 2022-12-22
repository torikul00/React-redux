import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../redux/actionCreators/productAction'
import './Card.css'

const Card = ({ product }) => {
    const dispatch = useDispatch()
    const { title, image, rating, quantity } = product
    const location = useLocation()


    const isCart = location.pathname.includes('cart')

    return (
        <div className='cardContainer'>
            <p>{quantity}</p>
            <div className="cardImage">
                <img src={image} alt="" />
            </div>
            <div className="cardInfo">
                <h3>{title.slice(0, 40) + '...'}</h3>
                <strong>Rating : {rating.rate}</strong>
            </div>
            {isCart ? null : <button className='btn' onClick={() => dispatch(addToCart(product))}>Add to Cart</button>}
            {isCart && <button onClick={() => dispatch(removeFromCart(product))}>Delete</button>}

        </div>
    );
};

export default Card;