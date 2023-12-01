import LifeCycle1 from "../components/functional/LifeCycle1";
import ParentProp from "../components/functional/ParentProp";
import State from "../components/functional/State";

const Functional = () => {
  return (
    <>
      <h4>Using Function Component</h4>
      <ParentProp name="Test2" age="44" city="Rajkot" />
      <h4>Counter using Function Component</h4>
      <State />
      <h4>Function Component LifeCycle Mounting </h4>
      <LifeCycle1 />
    </>
  );
};

export default Functional;
