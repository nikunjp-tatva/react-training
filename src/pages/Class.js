import LifeCycle from "../components/class/LifeCycle";
import Parent from "../components/class/Parent";
import StateClass from "../components/class/StateClass";

const Class = () => {
  return (
    <>
      <h4>Using Class Component</h4>
      <Parent name="Test4" age="11" city="Surat" />
      <h4>Counter using Class Component</h4>
      <StateClass />
      <h4>Class Component LifeCycle Mounting </h4>
      <LifeCycle />
    </>
  );
};

export default Class;
