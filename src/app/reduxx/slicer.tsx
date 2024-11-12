import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface TodoListsmain {
  name: string;
  qualification: string;
  address: string;
}

export const counterSlice = createSlice({
  name: "counter",
  initialState: [] as TodoListsmain[],
  reducers: {
    AddTodo: (state, action: PayloadAction<string>) => {
      return [...state, ...action.payload];
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      return state.filter((e) => e.name !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddTodo, removeTodo } = counterSlice.actions;
export default counterSlice.reducer;
