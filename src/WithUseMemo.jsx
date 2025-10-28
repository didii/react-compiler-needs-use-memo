import { useEffect, useMemo, useState } from "react";
import { increment } from "./increment";

export default function WithUseMemo({ ...props }) {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const computed = useMemo(() => ["foo", "bar", "string", "dodoo", "loo", "fabroo"].slice(0, count2 + 1), [count2]);

  function filtered() {
    increment("with:function");
    return computed.filter((f) => f.includes("oo"));
  }

  useEffect(() => {
    increment("with:computed");
    console.log(computed);
  }, [computed]);

  increment("with:render");

  return (
    <div className="card" {...props}>
      <h3 style={{ marginTop: 0 }}>With useMemo</h3>
      <p>
        When updating the unrelated state <code>count1</code>, only the render count updates. Both the function{" "}
        <code>filtered()</code> and the value <code>computed</code> will stay stable.
      </p>
      <button onClick={() => setCount1((count) => count + 1)}>
        Unrelated state
        <br />
        <code>count1 = {count1}</code>
      </button>
      <button onClick={() => setCount2((count) => count + 1)}>
        Related state
        <br />
        <code>count2 = {count2}</code>
      </button>
      <p>Original array: "{computed.join(",")}"</p>
      <p>Filtered: "{filtered().join(",")}"</p>
      <div>
        Times called <code>filtered()</code>: <span id="with:function">0</span>
        <br />
        Times <code>computed</code> changed: <span id="with:computed">0</span>
        <br />
        Times rerendered: <span id="with:render">0</span>
      </div>
    </div>
  );
}
