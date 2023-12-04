import react, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);
  const handleIncrementCountButton = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrementCountButton = () => {
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
        <button onClick={handleIncrementCountButton}>Increment</button>{" "}
        <button onClick={handleDecrementCountButton}>Decrement</button>
      </div>
    </>
  );
};
const LifeCycle1 = () => {
  const [visibility, setVisibility] = useState(false);

  const handleChangeVisibilityButton = () => {
    setVisibility((prev) => !prev);
  };

  return (
    <>
      <button onClick={handleChangeVisibilityButton}>
        {visibility ? "Hide Counter" : "Show Counter"}
      </button>
      {visibility && <Counter />}
    </>
  );
};

export default LifeCycle1;
