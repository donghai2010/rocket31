import { createSlice } from "@reduxjs/toolkit";
import { ADD_TODO, GET_LIST_TODO } from "../actionTypes";
import { getListTodoAsyncAction } from "../actions/todoActions";
const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getListTodoAsyncAction.fulfilled]: (state, action) => {
      state.todoList = action.payload;
    },
  },
});

const { reducer, actions } = todoSlice;
export { actions };

export default reducer;
