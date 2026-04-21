import { useLayoutEffect, useState, type HTMLAttributes } from 'react';
import { increment } from '../increment';
import { randomString } from '../randomString';
import { VarView } from './VarView';

const renderId = randomString();
const computedId = randomString();
const functionId = randomString();

export default function ProblemComponent({ ...props }: HTMLAttributes<HTMLDivElement>) {
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);
  const [baseArray, _] = useState(['foo', 'bar', 'string', 'dodoo', 'loo', 'fabroo']);

  const computed = baseArray.slice(0, count2);

  useLayoutEffect(() => {
    increment(computedId);
    console.log(computed);
  }, [computed]);

  increment(renderId);

  return (
    <div {...props}>
      <h3 style={{ marginTop: 0 }}>ProblemComponent ❌</h3>
      <p>
        <b>Expected behavior</b>: updating unrelated state <code>count1</code> will only rerender the component.
      </p>
      <p>
        <b>Observed behavior</b>: updating unrelated state <code>count1</code> also re-evaluates <code>computed</code>{' '}
        state as well as executing the <code>filter()</code> function.
      </p>
      <button onClick={() => setCount1(count => count + 1)}>
        Unrelated state
        <br />
        <code>count1 = {count1}</code>
      </button>
      <button onClick={() => setCount2(count => count + 1)}>
        Related state
        <br />
        <code>count2 = {count2}</code>
      </button>
      <VarView
        computed={computed}
        filtered={filter(computed)}
        computedId={computedId}
        functionId={functionId}
        renderId={renderId}
      />
    </div>
  );
}

function filter(array: string[]) {
  increment(functionId);
  return array.filter(f => f.includes('oo'));
}
