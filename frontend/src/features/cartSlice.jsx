import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cart.findIndex((x) => x.id === action.payload.id);
      if (itemIndex >= 0 && state.cart[itemIndex].cartQuantity > 0) {
        state.cart[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cart.push(tempProduct);
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeAllCart: (state, action) => {
      state.cart = [];
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    increaseQuantity: (state, action) => {
      const itemIndex = state.cart.findIndex((x) => x.id === action.payload.id);
      if (itemIndex >= 0 && state.cart[itemIndex].cartQuantity > 0) {
        state.cart[itemIndex].cartQuantity += 1;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    decreaseQuantity: (state, action) => {
      const itemIndex = state.cart.findIndex((x) => x.id === action.payload.id);
      if (itemIndex >= 0 && state.cart[itemIndex].cartQuantity > 0) {
        state.cart[itemIndex].cartQuantity -= 1;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    calcucalteTotal: (state) => {
      state.total = state.cart.reduce(
        (acc, item) => acc + item.cartQuantity * item.price,
        0
      );
    },
  },
});

export const {
  addToCart,
  removeAllCart,
  increaseQuantity,
  calcucalteTotal,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
