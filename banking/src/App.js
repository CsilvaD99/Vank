import { useSelector } from "react-redux";
import "./App.css";
import AccUpdate from "./components/AccUpdate";
import Transactions from "./components/Transactions";

function App() {
  const Uselect = useSelector((state) => state?.userInfoReducer?.moreinfo[0]);
  return (
    <div className="App">
      <h1>
        {Uselect?.firstName} {Uselect?.lastName}
      </h1>

      <AccUpdate />

      <Transactions />
    </div>
  );
}

export default App;
