import React, { useState } from "react";

const Child = (props) => <h4> Counter: {props.counter}</h4>;

const Parent = () => {
  const [counter, setCounter] = useState(1);

  const incrementCounter = () => {
    setCounter((prev) => prev + 1);
  };

  const decrementCounter = () => {
    setCounter((prev) => (prev ? prev - 1 : prev));
  };
  return (
    <>
      <Child counter={counter} />
      <div>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
      </div>
    </>
  );
};

const PassState2 = () => <Parent />;
export default PassState2;
