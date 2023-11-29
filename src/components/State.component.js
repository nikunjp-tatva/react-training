import React from "react";

const State = () => {
  const [value, setValue] = React.useState(0);
  return (
    <div>
      <p>{value} time clicked</p>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default State;
