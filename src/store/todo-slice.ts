import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoSliceState {
  items: any[];
}

const initialState: TodoSliceState = {
  items: [],
};

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    updateTodo(state, action: PayloadAction<any>): any {
      state.items.push(action.payload);
    },
  },
});

export const sortActions = todoSlice.actions;
export const { updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
