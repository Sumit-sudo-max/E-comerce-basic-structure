import React, { useState } from 'react';
import products from '../Data'; 
import Product from './Product';

const ProductListing = ({ setCartItems , cartItems}) => {
  const [categoryFilter, setCategoryFilter] = useState(''); 
  const [priceFilter, setPriceFilter] = useState(''); 
  const [ratingFilter, setRatingFilter] = useState(''); 
  const handleAddToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems(prevItems => [...prevItems, { ...product, quantity: 1 }]);
    }
  };
  const filteredProducts = products.filter(product => {
    // Apply category filter
    if (categoryFilter && product.category !== categoryFilter) {
      return false;
    }

    // Apply price filter
    if (priceFilter && product.price > parseFloat(priceFilter)) {
      return false;
    }

    // Apply rating filter
    if (ratingFilter && product.rating < parseFloat(ratingFilter)) {
      return false;
    }

    return true;
  });

  return (
    <div className="product-listing">
      <div className="filters">
        <label>
          Category:
          <select
            value={categoryFilter}
            onChange={e => setCategoryFilter(e.target.value)}
          >
            <option value="">All</option>
            <option value="Category A">Category A</option>
            <option value="Category B">Category B</option>
            <option value="Category C">Category C</option>
            <option value="Category D">Category D</option>
          </select>
        </label>
        <label>
          Price:
          <input
            type="number"
            value={priceFilter}
            onChange={e => setPriceFilter(e.target.value)}
          />
        </label>
        <label>
          Rating:
          <input
            type="number"
            step="0.1"
            value={ratingFilter}
            onChange={e => setRatingFilter(e.target.value)}
          />
        </label>
      </div>
      <div className="products">
      {filteredProducts.map(product => (
        <Product
          key={product.id}
          image={product.image}
          name={product.name}
          category={product.category}
          price={product.price}
          rating={product.rating}
          onAddToCart={() => handleAddToCart(product)} 
        />
      ))}
    </div>
    </div>
  );
};

export default ProductListing;
