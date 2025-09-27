import React, { useEffect, useState } from "react";

const Done = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      if (data && data.length) setData(data);
    }
    getData();
  }, []);
  return (
    <div>
      <div className="flex overflow-x-hidden">
        {data.map((todo) => (
          <li key={todo.id}>
            <div className="flex bg-amber-500 w-60 h-60 ">
              <div className="text-black">{todo.id}.</div> {todo.title}
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Done;
