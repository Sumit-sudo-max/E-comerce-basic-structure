import React, { useState } from 'react';

const Checkout = ({ cartItems, totalCost }) => {
    const [shippingInfo, setShippingInfo] = useState({
        name: '',
        address: '',
        email: '',
    });

    const [paymentInfo, setPaymentInfo] = useState({
        cardNumber: '',
        expirationDate: '',
        cvv: '',
    });

    const handleInputChange = (e, section) => {
        const { name, value } = e.target;
        if (section === 'shipping') {
        setShippingInfo({ ...shippingInfo, [name]: value });
        } else if (section === 'payment') {
        setPaymentInfo({ ...paymentInfo, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="checkout">
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit}>
            <h3>Shipping Information</h3>
            <div>
            <label>Name:</label>
            <input
                type="text"
                name="name"
                value={shippingInfo.name}
                onChange={(e) => handleInputChange(e, 'shipping')}
                required
            />
            </div>
            <div>
            <label>Address:</label>
            <input
                type="text"
                name="address"
                value={shippingInfo.address}
                onChange={(e) => handleInputChange(e, 'shipping')}
                required
            />
            </div>
            <div>
            <label>Email:</label>
            <input
                type="email"
                name="email"
                value={shippingInfo.email}
                onChange={(e) => handleInputChange(e, 'shipping')}
                required
            />
            </div>

            <h3>Payment Information</h3>
            <div>
            <label>Card Number:</label>
            <input
                type="text"
                name="cardNumber"
                value={paymentInfo.cardNumber}
                onChange={(e) => handleInputChange(e, 'payment')}
                required
            />
            </div>
            <div>
            <label>Expiration Date:</label>
            <input
                type="text"
                name="expirationDate"
                value={paymentInfo.expirationDate}
                onChange={(e) => handleInputChange(e, 'payment')}
                required
            />
            </div>
            <div>
            <label>CVV:</label>
            <input
                type="text"
                name="cvv"
                value={paymentInfo.cvv}
                onChange={(e) => handleInputChange(e, 'payment')}
                required
            />
            </div>

            <button type="submit">Submit</button>
        </form>
        <div className="total-cost">
            <h3>Total Cost:</h3>
            <p>₹{totalCost}</p>
        </div>
        </div>
    );
};

export default Checkout;
