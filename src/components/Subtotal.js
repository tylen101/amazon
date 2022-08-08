import React from 'react';
import '../CSS/subtotal.css';
import { useStateValue } from '../store/StateProvider';
import { getBasketTotal } from '../store/reducer';
export default function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const value = getBasketTotal(basket);
  return (
    <div className="subtotal">
      {/* <CurrencyFormat
        renderText={(value) => (
          // <> */}
      <p>
        Subtotal ({basket.length} items):
        <strong>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(value)}{' '}
        </strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" />
        This order contains a gift
      </small>
      {/* </> */}
      {/* )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      /> */}
      <button>Proceed to Checkout</button>
    </div>
  );
}
