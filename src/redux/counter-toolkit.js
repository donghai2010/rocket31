import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterReducer";
import todoReducer from "./reducers/todoReducer";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todoReducer: todoReducer,
  },
  devTools: true,
});

export default store;
