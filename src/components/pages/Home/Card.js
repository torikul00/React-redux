import React from 'react';
import './Card.css'

const Card = ({ product }) => {

    const { title,image ,rating} = product
    return (
        <div className='cardContainer'>
            <div className="cardImage">
                <img width='50%' src={image} alt="" />
            </div>
            <div className="cardInfo">
               <h3>{title}</h3>
               <strong>Rating : {rating.rate}</strong>
            </div>
            <button>Add to Cart</button>
        </div>
    );
};

export default Card;