// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductListing from './components/ProductList';
import ShoppingCart from './components/Cart'; 
import './App.css'
import Checkout from './components/Checkout';

function calculateTotalCost(items) {
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <BrowserRouter>
      <Header cartItemCount={cartItems.length} /> 
      <Routes>
        <Route
          exact
          path="/"
          element={<ProductListing setCartItems={setCartItems} cartItems={cartItems} />} 
        />
        <Route
          path="/cart"
          element={<ShoppingCart cartItems={cartItems} setCartItems={setCartItems} />} 
        />

    <Route
      path="/checkout"
      element={<Checkout cartItems={cartItems} totalCost={calculateTotalCost(cartItems)} />}
    />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
