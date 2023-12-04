import React, { useState } from "react";

const Child = (props) => {
  return (
    <div>
      <h4> Counter: {props.counter}</h4>
      <div>
        <button onClick={props.handleIncrementCounterButton}>Increment</button>
        <button onClick={props.handleDecrementCounterButton}>Decrement</button>
      </div>
    </div>
  );
};

const Parent = () => {
  const [counter, setCounter] = useState(1);

  const handleIncrementCounterButton = () => {
    setCounter((prev) => prev + 1);
  };

  const handleDecrementCounterButton = () => {
    setCounter((prev) => (prev ? prev - 1 : prev));
  };
  return (
    <Child
      counter={counter}
      handleIncrementCounterButton={handleIncrementCounterButton}
      handleDecrementCounterButton={handleDecrementCounterButton}
    />
  );
};

const PassState = () => <Parent />;
export default PassState;
