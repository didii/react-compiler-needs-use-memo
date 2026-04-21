import { type CSSProperties } from 'react';
import { FunctionWithArrayDependency } from './FunctionWithArrayDependency';
import { FunctionWithoutDependencies } from './FunctionWithoutDependencies';
import { FunctionWithInputDependency } from './FunctionWithInputDependency';

const itemStyle: CSSProperties = {
  flex: 1,
  minWidth: 0,
  overflowX: 'hidden',
  padding: '1rem',
  border: 'solid green 1px',
};

export function Callbacks() {
  return (
    <div>
      <h2>Callbacks</h2>
      <p>
        Small showcase that you still need to be aware of your dependencies in your function. The React compiler will
        wrap your function as if you would have done it yourself. This means in the first example will set{' '}
        <code>input</code> as one of its dependencies, forcing it to update every time the <code>input</code> changes.
      </p>
      <p>
        So while this example makes perfect sense, you still need to be aware of this aspect and since you don't
        explicitly mention your dependencies anymore, it is now hidden somewhere in the function.
      </p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <FunctionWithInputDependency style={{ ...itemStyle, borderColor: 'red' }} />
        <FunctionWithArrayDependency style={itemStyle} />
        <FunctionWithoutDependencies style={itemStyle} />
      </div>
    </div>
  );
}
