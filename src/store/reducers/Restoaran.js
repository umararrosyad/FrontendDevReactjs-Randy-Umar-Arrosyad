import { createSlice } from "@reduxjs/toolkit";

const searchTerm = createSlice({
  name: "restauran",
  initialState: {
    restourant: [],
  },
  reducers: {
    fillRestauran: (state, action) => { 
      state.restourant = action.payload;
    }
    // removeProduct: (state, action) => {
    //   state.category = action.payload;
    //   const updatedProduct = state.product_detail.filter(item => item.product_variant_id !== action.payload.product_variant_id);
    //   state.product_detail = updatedProduct;
    // },

    // updateProduct: (state, action) => {
    //   state.category = action.payload;
    //   const updatedProduct = state.product_detail.filter(item => item.product_variant_id !== action.payload.product_variant_id);
    //   const newItems = [...updatedProduct];
    //   newItems.push(action.payload);
    //   state.product_detail = newItems;
    // },
    // clearProduct: (state) => {
    //     state.product_detail =[]
    // }
  },
});

export const { fillRestauran } = searchTerm.actions;
export default searchTerm.reducer;
