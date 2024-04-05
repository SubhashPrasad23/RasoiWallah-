import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
    shipping: 5,
  },
  reducers: {
    addItem: (state, action) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.card.info.id === action.payload.card.info.id
      );


      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity += action.payload.quantity || 1;
        state.items[existingItemIndex].singleitemprice =
          (state.items[existingItemIndex].quantity *
            state.items[existingItemIndex].card.info.price) /
            100 ||
          (state.items[existingItemIndex].quantity *
            state.items[existingItemIndex].card.info.defaultPrice) /
            100;
       
      } else {
        state.items.push({
          ...action.payload,
          quantity: action.payload.quantity || 1,
          singleitemprice:
            action.payload.card.info.defaultPrice / 100 ||
            action.payload.card.info.price / 100,
        });
      }
      state.totalQuantity = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalPrice=state.items.reduce((total,item)=>total+item.singleitemprice,0)

    },

    updateQuantity: (state, action) => {
      const check = state.items.findIndex((item) => {
        return item.card.info.id === action.payload.card.info.id;
      });
      // console.log((state.totalQuantity += 1), "quantity");
      // console.log(check);
      if (check !== -1) {
        state.items[check].quantity += 1;
        state.items[check].singleitemprice =
          (state.items[check].card.info.price / 100 ||
            state.items[check].card.info.defaultPrice / 100) *
          state.items[check].quantity;

        state.totalQuantity = state.items.reduce(
          (total, item) => total + item.quantity,
          0
        );
        state.totalPrice=state.items.reduce((total,item)=>total+item.singleitemprice,0)

      } else {
        state.totalQuantity = state.totalQuantity + 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const check = state.items.findIndex((item) => {
        return item.card.info.id === action.payload.card.info.id;
      });
      // console.log(check);
      if (check !== -1) {
        if (state.items[check].quantity > 1) {
          state.items[check].quantity -= 1;
          state.items[check].singleitemprice =
            (state.items[check].quantity * state.items[check].card.info.price) /
              100 ||
            (state.items[check].quantity *
              state.items[check].card.info.defaultPrice) /
              100;
          state.totalQuantity = state.items.reduce(
            (total, item) => total + item.quantity,
            0
          );
          state.totalPrice=state.items.reduce((total,item)=>total+item.singleitemprice,0)
        }
        // state.items[check].quantity -= 1;
      }
    },
  },
});

export default cartSlice.reducer;
export const { addItem, updateQuantity, decreaseQuantity } = cartSlice.actions;
