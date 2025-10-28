import WithoutUseMemo from "./WithoutUseMemo";
import WithUseMemo from "./WithUseMemo";

function App() {
  return (
    <div style={{ maxWidth: 1280, marginLeft: "auto", marginRight: "auto" }}>
      <h1>Keep using useMemo for complex state</h1>
      <p>
        Simple example where <code>useMemo</code> is still required when creating complex state such as arrays or
        objects. Here, computed state is calculated based on <code>count2</code>. However, updating <code>count1</code>{" "}
        still re-executes the function to calculate the state.
      </p>
      <div style={{ display: "flex", gap: "1rem" }}>
        <WithoutUseMemo style={{ flex: 1, padding: "1rem", border: "solid red 1px" }} />
        <WithUseMemo style={{ flex: 1, padding: "1rem", border: "solid blue 1px" }} />
      </div>
    </div>
  );
}

export default App;
