import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction } from "./redux/actions/todoActions";

const getTodoList = (state) => {
  return state.todoList;
};

export const TodoList = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const todoList = useSelector(getTodoList);

  const handleAddTodo = () => {
    dispatch(addTodoAction(text));
    setText("");
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add todo</button>
      <ul>
        {todoList.map((item, key) => (
          <li key={key}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
