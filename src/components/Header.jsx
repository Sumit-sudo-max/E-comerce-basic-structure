import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartItemCount }) => {
    return (
        <>
        <header>
            <span className='fs-4 fw-bold text-white'>Hey Cart</span>
            <ul className="nav">
            <li><Link to="/">Home</Link></li>
            <li>
                <Link to="/cart">
                <i className="bi bi-cart-plus"></i>
                {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
                </Link>
            </li>
            </ul>
        </header>
        </>
    );
}

export default Header;
