export const ADD_TO_BASKET = 'ADD_TO_BASKET';

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
    default:
      return state;
  }
}
