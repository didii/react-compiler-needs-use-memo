import { useLayoutEffect, useState, type CSSProperties } from "react";
import { randomString } from "../randomString";
import { increment } from "../increment";
import { FunctionInComponent } from "./FunctionInComponent";
import { UseCallback } from './UseCallback';
import { OutsideReact } from './OutsideReact';

const itemStyle: CSSProperties = {
  flex: 1,
  minWidth: 0,
  overflowX: "hidden",
  padding: "1rem",
  border: "solid red 1px",
};

export function Callbacks() {
  return (
    <div>
      <h2>Callbacks</h2>
      <div style={{ display: "flex", gap: "1rem" }}>
        <FunctionInComponent style={itemStyle} />
        <OutsideReact style={{...itemStyle, borderColor: 'green'}} />
        <UseCallback style={{...itemStyle, borderColor: 'green'}} />
      </div>
    </div>
  );
}
