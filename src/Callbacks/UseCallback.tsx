import { useCallback, useLayoutEffect, useState, type HTMLAttributes } from "react";
import { increment } from "../increment";
import { randomString } from "../randomString";

const functionId = randomString();
const filteredId = randomString();
const renderId = randomString();

export function UseCallback({ ...props }: HTMLAttributes<HTMLDivElement>) {
  const [baseArray, _] = useState(["foo", "bar", "string", "dodoo", "loo", "fabroo"]);
  const [input, setInput] = useState("");

  const filter = useCallback((array: string[], input: string) => {
    return array.filter((s) => s.includes(input));
  }, []);

  const filtered = filter(baseArray, input);

  useLayoutEffect(() => {
    increment(functionId);
  }, [filter]);
  useLayoutEffect(() => {
    increment(filteredId);
  }, [filtered]);
  useLayoutEffect(() => {
    increment(renderId);
  });

  return (
    <div {...props}>
      <h3 style={{ marginTop: 0 }}>With useCallback ✅</h3>
      <input value={input} onChange={(ev) => setInput(ev.target.value)} />
      <pre>{JSON.stringify(filtered)}</pre>
      <div>
        Times <code>filter()</code> changed: <span id={functionId}>0</span>
      </div>
      <div>
        Times <code>filtered</code> changed: <span id={filteredId}>0</span>
      </div>
      <div>
        Times rerendered: <span id={renderId}>0</span>
      </div>
    </div>
  );
}
