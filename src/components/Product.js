import React from 'react';
import '../CSS/product.css';



function Product({ title, image, price, rating, id }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((e, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img
        src={image}
        alt="product"
      />
      <button >Add to Cart</button>
    </div>
  );
}

export default Product;
