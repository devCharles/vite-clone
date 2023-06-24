import React from "react";

export default function Button(props) {
  let className = "button";
  if (props.isPrimary) className += " button_primary";

  return <div className={className}>{props.text}</div>;
}
