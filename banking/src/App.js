import "./App.css";
import AccUpdate from "./components/AccUpdate";
import Transactions from "./components/Transactions";

function App() {
  return (
    <div className="App">
      <h1>Banking Deployed</h1>

      <AccUpdate />

      <Transactions />
    </div>
  );
}

export default App;
