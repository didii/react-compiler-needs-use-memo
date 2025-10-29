import type { CSSProperties } from "react";
import ProblemComponent from "./ProblemComponent";
import UseMemoFix from "./UseMemoFix";
import VariableFix from "./VariableFix";

const itemStyle: CSSProperties = {
  flex: 1,
  minWidth: 0,
  overflowX: "hidden",
  padding: "1rem",
  border: "solid red 1px",
};

export function DerivedState() {
  return (
    <div>
      <h2>DerivedState</h2>
      <p>
        Simple example where <code>useMemo</code> is still required when creating complex state such as arrays or
        objects. I haven't found another way to fix it apart from using a <code>useMemo</code>.
      </p>
      <div style={{ display: "flex", gap: "1rem" }}>
        <ProblemComponent style={{ ...itemStyle, borderColor: "red" }} />
        <VariableFix style={{ ...itemStyle, borderColor: "orange" }} />
        <UseMemoFix style={{ ...itemStyle, borderColor: "green" }} />
      </div>
    </div>
  );
}
