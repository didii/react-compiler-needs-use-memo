import { useEffect, useState } from "react";
import { increment } from "./increment";

export default function WithoutUseMemo({ ...props }) {
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);

  const computed = ["foo", "bar", "string", "dodoo", "loo", "fabroo"].slice(0, count2);

  function filtered() {
    increment("without:function");
    return computed.filter((f) => f.includes("oo"));
  }

  useEffect(() => {
    increment("without:computed");
    console.log(computed);
  }, [computed]);

  increment("without:render");

  return (
    <div {...props}>
      <h3 style={{ marginTop: 0 }}>Without useMemo</h3>
      <p>
        When updating the unrelated state <code>count1</code>, both the <code>filter()</code> function as well as the
        reference of the <code>computed</code> value will change.
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
        Times called <code>filtered()</code>: <span id="without:function">0</span>
        <br />
        Times <code>computed</code> changed: <span id="without:computed">0</span>
        <br />
        Times rerendered: <span id="without:render">0</span>
      </div>
    </div>
  );
}
