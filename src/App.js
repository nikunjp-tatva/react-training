import JSXComponent from "./components/functional/JSXComponent";
import ParentProp from "./components/functional/ParentProp";
import State from "./components/functional/State";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <JSXComponent />
        <ParentProp name="Test2" age= "44" city="Rajkot" />
        <State />
      </header>
    </div>
  );
}

export default App;
