import React from 'react';
import '../CSS/home.css';
import Product from './Product';
import products from '../productStore';
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          alt="img from amzn"
          src="https://m.media-amazon.com/images/I/61B3QV3pFdL._SX3000_.jpg"
        />
        <div className="home__row">
          {products.map((e, i) => {
            return (
              <Product key={e.title}
                title={e.title}
                price={e.price}
                image={e.image}
                rating={e.rating}
              />
            );
          })}
        </div>
        {/* <div className="home__row"></div> */}
      </div>
    </div>
  );
}

export default Home;
