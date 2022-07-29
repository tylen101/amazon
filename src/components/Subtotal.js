import React from 'react';
import '../CSS/subtotal.css';
import CurrencyFormat from 'react-currency-format';
export default function Subtotal({ basket }) {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(val) => (
          <>
            <p>
              Subtotal ({0} items):
              <strong>{`${val}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={99}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}
