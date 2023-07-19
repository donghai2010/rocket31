import React, { useEffect, useState } from "react";
import store from "./redux/store";
import { connect, useDispatch, useSelector } from "react-redux";
import { decremented, incremented } from "./redux/reducers/counterReducer";

const selectCounter = (state) => {
  return state.counter;
};

const Counter = () => {
  const counter = useSelector(selectCounter);
  const dispatch = useDispatch();

  const dispatchIncrement = () => {
    dispatch(incremented());
  };

  const dispatchDecrement = () => {
    dispatch(decremented());
  };

  return (
    <div>
      <p>Value: {counter} </p>
      <button onClick={dispatchIncrement}>Increase</button>
      <button onClick={dispatchDecrement}>Decrease</button>
    </div>
  );
};

export default Counter;
