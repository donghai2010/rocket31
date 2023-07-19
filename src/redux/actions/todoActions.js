import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAll } from "../../todoApi";
import { ADD_TODO, GET_LIST_TODO } from "../actionTypes";

const addTodoAction = (text) => {
  return {
    type: ADD_TODO,
    payload: text,
  };
};

// const setListTodoAction = (payload) => {
//   return {
//     type: GET_LIST_TODO,
//     payload: payload,
//   };
// };

// const getListTodoAsyncAction = () => {
//   return async (dispatch, getState, rocket31) => {
//     try {
//       const todos = await getAll();
//       const state = getState();

//       dispatch(setListTodoAction(todos));
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };

const getListTodoAsyncAction = createAsyncThunk(GET_LIST_TODO, async () => {
  const todos = await getAll();
  return todos;
});

export { addTodoAction, getListTodoAsyncAction };
