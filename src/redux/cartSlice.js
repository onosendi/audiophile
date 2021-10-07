import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    actAdd: (state, { payload }) => {
      const { product, quantity = 1, overrideQuantity = false } = payload;
      if (!state[product.slug]) {
        state[product.slug] = { ...product, quantity: 0 };
      }

      const qty = Number(quantity);
      if (overrideQuantity) {
        state[product.slug].quantity = qty;
      } else {
        state[product.slug].quantity += qty;
      }
    },
    actClear: () => initialState,
    actRemove: (state, { payload: slug }) => {
      const { [slug]: value, ...rest } = state;
      return rest;
    },
  },
});

const { reducer, actions } = cartSlice;
export const { actAdd, actClear, actRemove } = actions;

//
// Selectors
//
export const selectItems = (s) => (
  Object.entries(s.cart).map(([slug, obj]) => ({ slug, ...obj })));

export const selectCountItems = (s) => (
  Object.entries(s.cart).reduce((acc, [, obj]) => acc + obj.quantity, 0));

export const selectTotalCost = (s) => (
  Object.entries(s.cart).reduce((acc, [, obj]) => obj.quantity * obj.price + acc, 0));

export default reducer;
