import React, { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const HandleAdd = () => {
    setTodo;
  };

  return (
    <div>
      <input type="text" />
      <button type="submit" onClick={HandleAdd}>
        Add
      </button>
      <p>{todo}</p>
    </div>
  );
};

export default TodoList;
