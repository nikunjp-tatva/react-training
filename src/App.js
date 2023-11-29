import JSXComponent from "./components/JSXComponent";
import Parent from "./components/ParentProp.component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <JSXComponent />
        <Parent name="Test2" age= "44" city="Rajkot" />
      </header>
    </div>
  );
}

export default App;
