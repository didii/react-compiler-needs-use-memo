import { useRef } from 'react';

export interface VarViewProps {
  computed: string[];
  filtered: string[];

  computedId: string;
  functionId: string;
  renderId: string;
}

export function VarView({ computed, filtered, computedId, functionId, renderId }: VarViewProps) {
  const ref = useRef(['boe']);
  return (
    <div>
      <pre>computed = {JSON.stringify(computed)}</pre>
      <pre>filtered = {JSON.stringify(filtered)}</pre>
      <pre>Ref: {ref.current}</pre>
      <div>
        Times <code>computed</code> changed: <span id={computedId}>0</span>
        <br />
        Times <code>filter()</code> called: <span id={functionId}>0</span>
        <br />
        Times rerendered: <span id={renderId}>0</span>
      </div>
    </div>
  );
}
