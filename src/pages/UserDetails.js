import React, { useState } from "react";

import Users from "../components/functional/Users";
import Todo from "../components/class/Todo";

export default function UserDetails() {
  const [selectedMethod, setSelectedMethod] = useState(true);
  const handleShowFetchUsage = () => setSelectedMethod(false);
  const handleShowAxiosUsage = () => setSelectedMethod(true);
  return (
    <>
      <div>
        <button onClick={handleShowFetchUsage}>Fetch</button>
        <button onClick={handleShowAxiosUsage}>Axios</button>
      </div>

      <h4>
        {selectedMethod
          ? "Using Axios with Functional Component"
          : "Using Fetch with Class Component"}
      </h4>

      {selectedMethod ? <Users /> : <Todo />}
    </>
  );
}
