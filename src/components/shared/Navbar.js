import React from 'react';
import { Link } from 'react-router-dom';
import { HiShoppingCart } from 'react-icons/hi'
import './Navbar.css'
const Navbar = () => {
    return (
        <nav>
            <div className="logo">TIMU TECH</div>
            <div className="navLinks">
                <div>
                    <Link to='/'> Home</Link>
                    <Link to='/about'> About us</Link>
                    <Link to='/toprated'> Top Rated</Link>
                </div>
                <div className="icons">
                    <Link to='cart'><HiShoppingCart className='icon' /></Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;