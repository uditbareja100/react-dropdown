import Dropdown from "./components/dropdown";
import "./App.css";

function App() {
  const items = ["Yes", "No"];
  return (
    <div className="App">
      <Dropdown placeholder={"Select.."} items={items} />
    </div>
  );
}

export default App;
