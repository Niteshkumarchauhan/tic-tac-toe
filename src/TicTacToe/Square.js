import React from "react";

export default function Square(props) {
  return (
    <div
    onClick={props.onClick}
      style={{
        border: "1px solid #1e20e2",
        height: "100px",
        width: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:"yellowgreen",
        color:"red"
      }}
      className="square"
    >
      <h5>{props.value}</h5>
    </div>
  );
}
