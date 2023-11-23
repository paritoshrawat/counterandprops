import "./App.css";
import Card from "./components/Card";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Card channel="chai" btnText="change" />
      <Counter />
    </>
  );
}

export default App;
