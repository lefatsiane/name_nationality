import "./App.css";
import PredictNames from "./components/PredictNames";

export default function App() {
  return (
    <div className="App">
      <h1>Enter a name</h1>
      <h2>We will predict where you are from</h2>
      <PredictNames />
    </div>
  );
}
