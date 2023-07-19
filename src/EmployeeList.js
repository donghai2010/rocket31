import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getListTodoAction,
  getListTodoAsyncAction,
} from "./redux/actions/todoActions";

const getTodoListFromStore = (store) => {
  return store.todoReducer.todoList;
};

const EmployeeList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector(getTodoListFromStore);

  const getListEmployee = () => {
    dispatch(getListTodoAsyncAction());
  };

  console.log(todoList);

  useEffect(() => {
    getListEmployee();
  }, []);

  return (
    <div>
      <ul>
        {todoList.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
