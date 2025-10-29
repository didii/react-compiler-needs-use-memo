import { useLayoutEffect, useState, type HTMLAttributes } from "react";
import { increment } from "../increment";
import { randomString } from "../randomString";

const renderId = randomString();
const computedId = randomString();
const filteredId = randomString();

export default function VariableFix({ ...props }: HTMLAttributes<HTMLDivElement>) {
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);

  const computed = ["foo", "bar", "string", "dodoo", "loo", "fabroo"].slice(0, count2);
  const filtered = computed.filter((f) => f.includes("oo"));

  useLayoutEffect(() => {
    increment(computedId);
  }, [computed]);
  useLayoutEffect(() => {
    increment(filteredId);
  }, [filtered]);

  increment(renderId);

  return (
    <div {...props}>
      <h3 style={{ marginTop: 0 }}>VariableFix ❌</h3>
      <p>Changing the function call to a variable will also not cache the variable correctly.</p>
      <p>
        <b>Important notice</b>: changing <code>JSON.stringify</code> into <code>.join(",")</code> will "fix" the issue.
        I assume this is because now, the resulting string has become a dependency of the jsx rather than the complex
        object. Meaning we don't do any reference equations anymore.
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
      <pre>filtered = {JSON.stringify(filtered)}</pre>
      <div>
        Times <code>computed</code> changed: <span id={computedId}>0</span>
        <br />
        Times <code>filtered</code> changed: <span id={filteredId}>0</span>
        <br />
        Times rerendered: <span id={renderId}>0</span>
      </div>
    </div>
  );
}
