import React, { useState } from "react";

const Child = (props) => {
  return (
    <div>
      <h4> Counter: {props.counter}</h4>
      <div>
        <button onClick={props.incrementCounter}>Increment</button>
        <button onClick={props.decrementCounter}>Decrement</button>
      </div>
    </div>
  );
};

const Parent = () => {
  const [counter, setCounter] = useState(1);

  const incrementCounter = () => {
    setCounter((prev) => prev + 1);
  };

  const decrementCounter = () => {
    setCounter((prev) => (prev ? prev - 1 : prev));
  };
  return (
    <Child
      counter={counter}
      incrementCounter={incrementCounter}
      decrementCounter={decrementCounter}
    />
  );
};

const PassState = () => <Parent />;
export default PassState;
