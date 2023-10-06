import React from 'react'

const Product = ({image, name, category, price,rating, onAddToCart}) => {
    return (
        <>
            <div className="product">
                <img src={image} alt="" />
                <h3>{name}</h3>
                <p>{category}</p>
                <p>₹{price}</p>
                <p>Rating:{rating}</p>
                <button onClick={onAddToCart}>Add To Cart</button>
            </div>
        </>
    )
}

export default Product