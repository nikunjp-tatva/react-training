import PassState from "../components/functional/PassState";
import PassState2 from "../components/functional/PassState2";

const StateProps = () => {
  return (
    <>
      <h4>Counter using Pass state from parent to child</h4>
      <PassState />
      <h4>Counter using Pass state from parent to child Pass only state</h4>
      <PassState2 />
    </>
  );
};

export default StateProps;
