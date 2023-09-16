import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    leColor: "white",
    
};

const navColorsReducer = createSlice({
  name: "colors",
  initialState,
  reducers: {
    setLeColor: (state, action) => {
      state.leColor = action.payload;
    },
  },
});

export const { setLeColor } = navColorsReducer.actions;

export default navColorsReducer.reducer;
