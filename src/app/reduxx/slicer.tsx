import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: [] as TodoLists[],
  reducers: {
    AddTodo: (state, action: PayloadAction<TodoLists[]>) => {
      return [...state, ...action.payload];
    },
    Remove: (state, action: PayloadAction<string>) => {
      return state.filter((e) => e.name !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddTodo, Remove } = counterSlice.actions;
export default counterSlice.reducer;
