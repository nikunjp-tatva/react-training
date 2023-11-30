import React from "react";

const State = () => {
  const [value, setValue] = React.useState(0);
  return (
    <div>
      <p>Total: {value}</p>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Plus
      </button>
      <button
        onClick={() => {
          setValue(value? value - 1 : value);
        }}
      >
        Minus
      </button>
    </div>
  );
};

export default State;
