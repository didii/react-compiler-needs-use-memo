import { useLayoutEffect, useState, type HTMLAttributes } from 'react';
import { increment } from '../increment';
import { randomString } from '../randomString';

const functionId = randomString();
const filteredId = randomString();
const renderId = randomString();

export function FunctionWithArrayDependency({ ...props }: HTMLAttributes<HTMLDivElement>) {
  const [baseArray, _] = useState(['foo', 'bar', 'string', 'dodoo', 'loo', 'fabroo']);
  const [input, setInput] = useState('');

  const filter = (input: string) => {
    return baseArray.filter(s => s.includes(input));
  };

  const filtered = filter(input);

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
      <h3 style={{ marginTop: 0 }}>Function with dependency on array ✅</h3>
      <p>
        <b>Expected behavior</b>: typing in the input will only update <code>filtered</code> and <code>filter</code> is
        a stable function.
      </p>
      <p>
        <b>Observed behavior</b>: the <code>filter</code> function is stable (which is not the case without the
        compiler), but <code>filtered</code> ch
      </p>
      <input value={input} onChange={ev => setInput(ev.target.value)} />
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
