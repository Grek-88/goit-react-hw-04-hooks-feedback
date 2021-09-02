import React from "react";

export default function BtnFeedback(props) {
  return (
    <button
      style={{ margin: "15px", cursor: "pointer" }}
      type="button"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}
