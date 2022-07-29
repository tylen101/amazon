import React from 'react';
import '../CSS/product.css';
import { useStateValue } from '../store/StateProvider';
import { ADD_TO_BASKET } from '../store/reducer';
function Product({ title, image, price, rating, id }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: ADD_TO_BASKET,
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

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
      <img src={image} alt="product" />
      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}

export default Product;
