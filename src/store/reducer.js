export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';

export const initialState = {
  basket: [],
};

export const getBasketTotal = (basket) => {
  return basket?.reduce((sum, i) => i.price + sum, 0);
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case REMOVE_FROM_BASKET:
      const i = state.basket.findIndex((itm) => itm.id === action.id);
      let newBasket = [...state.basket];
      if (i >= 0) {
        newBasket.splice(i, 1);
      } else {
        console.warn('Cannot remove items not in cart');
      }
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
}
