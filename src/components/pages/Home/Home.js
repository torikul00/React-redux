import React, { useEffect, useState } from 'react';
import Card from './Card';
import './Home.css'


const Home = () => {

    const [products, setProduct] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div className='productContainer'>
            {products.map(product => <Card key={product.id} product  = {product} />)}
            
        </div>
    );
};

export default Home;