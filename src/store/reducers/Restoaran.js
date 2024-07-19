import { createSlice } from "@reduxjs/toolkit";

const searchTerm = createSlice({
  name: "restauran",
  initialState: {
    restourant: [],
    check : false,
    level : "",
    detail : {}
  },
  reducers: {
    fillRestauran: (state, action) => { 
      state.restourant = action.payload;
    },
    switchCheck: (state, action) => { 
      state.check = action.payload;
    },
    switchLevel: (state, action) => { 
      state.level = action.payload;
    },
    switchDetail: (state, action) => { 
      state.detail = action.payload;
    },
  },
});

export const { fillRestauran , switchCheck , switchLevel, switchDetail} = searchTerm.actions;
export default searchTerm.reducer;
