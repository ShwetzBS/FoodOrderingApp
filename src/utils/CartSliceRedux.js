import { createSlice } from "@reduxjs/toolkit";

const CartSliceRedux = createSlice({
  name: "CartSlice",
  initialState: {
    items: [], //Initially cart is empty
  },
  reducers: {
    addItemToCart: (state, action) => {
      //Mutating the state here directly
      state.items.push(action.payload); //state is initialstate which is an empty array (items )at the beginning . So to add you will push an element into this array
    },

    removeCartItem: (state, action) => {
      state.items.pop(); // For the sake of simplocity we are just removing the last element (pop) . But in real life you will have to take the index of action.payload and remove that item from array(splice ,slice etc etc )
    },

    clearCart: (state, action) => {
      state.items.length = 0; //You dont need action because you will make the length of the cart array 0 .This will make our state our state []
      //state=[] will NOT WORK
    },
  },
});

//This is the Redux Syntax .You have to floow it

//Named export
export const { addItemToCart, removeCartItem, clearCart } =
  CartSliceRedux.actions;

//Default Export
export default CartSliceRedux.reducer;
