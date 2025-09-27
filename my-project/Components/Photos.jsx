import React, { useEffect, useState } from "react";

const Photos = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => console.log(json));

      if (data && data.length) setData(data);
    }
    getData();
  }, []);
  return (
    <div>
      {data.map((users) => (
        <li key={users.id}>
          {users.name}
          {users.email}
          {users.website}
          {users.phone}
        </li>
      ))}
    </div>
  );
};

export default Photos;
