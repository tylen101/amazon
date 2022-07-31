import React from 'react';
import '../CSS/checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from '../store/StateProvider';
import CheckoutProduct from './CheckoutProduct';
export default function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="chechout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/em/pd22/xcm_em_prime_day_2022_384_usen_8531_w8ksql3t9g_us_en_desktop_hero_lo_us_3000x400"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Your Cart</h2>
          {basket?.map((e, i) => (
            <CheckoutProduct key={i}
              id={e.id}
              title={e.title}
              image={e.image}
              price={e.price}
              rating={e.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}
