import react, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);
  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  const decrementCount = () => {
    setCount((prev) => (prev ? prev - 1 : prev));
  };

  useEffect(() => {
    // componentDidMount
    console.log("Component Mounted");

    // componentWillUnmount
    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  // componentDidUpdate
  useEffect(() => {
    console.log("Component Updated");
  }, [count]);

  return (
    <>
      <h4>Count Value: {count}</h4>{" "}
      <div>
        <button onClick={incrementCount}>Increment</button>{" "}
        <button onClick={decrementCount}>Decrement</button>
      </div>
    </>
  );
};
const LifeCycle1 = () => {
  const [visibility, setVisibility] = useState(false);

  const changeVisibility = () => {
    setVisibility((prev) => !prev);
  };

  return (
    <>
      <button onClick={changeVisibility}>
        {visibility ? "Hide Counter" : "Show Counter"}
      </button>
      {visibility && <Counter />}
    </>
  );
};

export default LifeCycle1;
