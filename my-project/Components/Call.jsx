import React, { useEffect } from "react";

const Call = () => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);
  return <div>call</div>;
};

export default Call;
