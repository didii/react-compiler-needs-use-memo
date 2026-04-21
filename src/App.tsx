import { Callbacks } from './Callbacks';
import { DerivedState } from "./DerivedState";

function App() {
  return (
    <div style={{ maxWidth: 1280, marginLeft: "auto", marginRight: "auto" }}>
      <h1>React compiler Shenanigans</h1>
      <DerivedState />
      <Callbacks />
    </div>
  );
}

export default App;
