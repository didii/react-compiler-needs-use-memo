import { useLayoutEffect, useMemo, useState, type HTMLAttributes } from "react";
import { increment } from "../increment";
import { randomString } from "../randomString";

const renderId = randomString();
const computedId = randomString();
const functionId = randomString();

export default function UseMemoFix({ ...props }: HTMLAttributes<HTMLDivElement>) {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const computed = useMemo(() => ["foo", "bar", "string", "dodoo", "loo", "fabroo"].slice(0, count2 + 1), [count2]);

  function filter() {
    increment(functionId);
    return computed.filter((f) => f.includes("oo"));
  }

  useLayoutEffect(() => {
    increment(computedId);
    console.log(computed);
  }, [computed]);

  increment(renderId);

  return (
    <div className="card" {...props}>
      <h3 style={{ marginTop: 0 }}>UseMemoFix ✅</h3>
      <p>
        When wrapping the <code>computed</code> state with a <code>useMemo</code>, the code behaves as expected:
        updating the unrelated state <code>count1</code> only updates the render count meaning <code>computed</code> has
        become stable.
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
      <pre>computed = {JSON.stringify(computed)}</pre>
      <pre>filtered = {JSON.stringify(filter())}</pre>
      <div>
        Times <code>computed</code> changed: <span id={computedId}>0</span>
        <br />
        Times called <code>filter()</code>: <span id={functionId}>0</span>
        <br />
        Times rerendered: <span id={renderId}>0</span>
      </div>
    </div>
  );
}
