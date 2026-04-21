import { useLayoutEffect, useState, type HTMLAttributes } from 'react';
import { increment } from '../increment';
import { randomString } from '../randomString';

const functionId = randomString();
const filteredId = randomString();
const renderId = randomString();

export function FunctionWithInputDependency({ ...props }: HTMLAttributes<HTMLDivElement>) {
  const [baseArray, _] = useState(['foo', 'bar', 'string', 'dodoo', 'loo', 'fabroo']);
  const [input, setInput] = useState('');

  const filter = (baseArray: string[]) => {
    return baseArray.filter(s => s.includes(input));
  };

  const filtered = filter(baseArray);

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
      <h3 style={{ marginTop: 0 }}>Function with dependency on input ❌</h3>
      <p>
        <b>Expected behavior</b>: <code>filter</code> will be a stable function and will not update when typing into the input.
      </p>
      <p>
        <b>Observed behavior</b>: the function <code>filter</code> will change on every input change.
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
