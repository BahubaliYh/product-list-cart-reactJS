import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from "./types";
const initialState: CartItem[] = [];
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers:{
    addToCart:(state, action)=>{
      const itemExists = state.find((item)=> item.id === action.payload.id);
      if(itemExists){
        itemExists.quantity++;
      } else{
        state.push({...action.payload, quantity: 1})
      }
    },
    removeFromCart:(state, action)=>{
      return state.filter((item)=> item.id !== action.payload)
    },
    incrementQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if(item)
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item)
      if (item.quantity === 1) {
        return state.filter((item) => item.id !== action.payload);
      }
      if(item)
      item.quantity--;
    },
  },
 
})


export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;