import { type CSSProperties } from 'react';
import { FunctionInComponent } from './FunctionInComponent';
import { OutsideReact } from './OutsideReact';
import { UseCallback } from './UseCallback';

const itemStyle: CSSProperties = {
  flex: 1,
  minWidth: 0,
  overflowX: 'hidden',
  padding: '1rem',
  border: 'solid red 1px',
};

export function Callbacks() {
  return (
    <div>
      <h2>Callbacks</h2>
      <p>
        Simple example where React compiler does nothing for caching functions. Most of the time, this isn't any
        problem, unless you need to use a function inside a <code>useEffect</code>. When this happens, it might take a
        long while before you have found out the actual culprit.
      </p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <FunctionInComponent style={itemStyle} />
        <OutsideReact style={{ ...itemStyle, borderColor: 'green' }} />
        <UseCallback style={{ ...itemStyle, borderColor: 'green' }} />
      </div>
    </div>
  );
}
