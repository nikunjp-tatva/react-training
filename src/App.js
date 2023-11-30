import Parent from "./components/class/Parent";
import StateClass from "./components/class/StateClass";
import JSXComponent from "./components/functional/JSXComponent";
import ParentProp from "./components/functional/ParentProp";
import PassState from "./components/functional/PassState";
import State from "./components/functional/State";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React App</h1>
        <JSXComponent />
        <h4>Using Function Component</h4>
        <ParentProp name="Test2" age= "44" city="Rajkot" />
        <h4>Using Class Component</h4>
        <Parent name="Test4" age= "11" city="Surat" />
        <h4>Counter using Function Component</h4>
        <State />
        <h4>Counter using Class Component</h4>
        <StateClass />
        <h4>Counter using Pass state from parent to child</h4>
        <PassState />
      </header>
    </div>
  );
}

export default App;
