import React from "react";

const State = () => {
  const [value, setValue] = React.useState(0);
  return (
    <div>
      <p>Counter: {value}</p>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setValue(value ? value - 1 : value);
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default State;
