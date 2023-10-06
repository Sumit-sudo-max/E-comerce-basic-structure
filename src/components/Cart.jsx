import React from 'react';
import { Link } from 'react-router-dom';

const ShoppingCart = ({ cartItems, setCartItems }) => {
    const handleRemoveItem = (productId) => {
        setCartItems(cartItems.filter(item => item.id !== productId));
    };

    const handleIncreaseQuantity = (productId) => {
        setCartItems(cartItems.map(item => {
        if (item.id === productId) {
            return { ...item, quantity: item.quantity + 1 };
        }
        return item;
        }));
    };

    const handleDecreaseQuantity = (productId) => {
        setCartItems(cartItems.map(item => {
        if (item.id === productId && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
        }
        return item;
        }));
    };

    const calculateTotalCost = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    return (
        <div className="shopping-cart">
        <h2>Shopping Cart</h2>
        {cartItems.map(item => (
            <div className="cart-item" key={item.id}>
            <span>{item.name} - ₹{item.price} x {item.quantity}</span>
            <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
            <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </div>
        ))}
        <div className="cart-summary">
            <h3>Total: ₹{calculateTotalCost()}</h3>
        </div>
        <Link to="/checkout">Proceed to Checkout</Link>

        </div>
    );
};

export default ShoppingCart;
