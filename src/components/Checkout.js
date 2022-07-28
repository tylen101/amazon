import React from 'react';
import '../CSS/checkout.css';
import Subtotal from './Subtotal';
export default function Checkout() {
  return (
    <div className="checkout">
      <div className="chechout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/em/pd22/xcm_em_prime_day_2022_384_usen_8531_w8ksql3t9g_us_en_desktop_hero_lo_us_3000x400"
          alt=""
        />
        <div>
          <h2 className="checkout__title"><Subtotal/></h2>

        </div>
      </div>
      <div className="checkout__right">
        <h2>subtotal</h2>
      </div>
    </div>
  );
}
