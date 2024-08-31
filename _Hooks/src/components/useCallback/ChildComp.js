import React, { memo } from "react";

const ChildComp = ({handleClick}) => {
  console.log("Child component rendered");
  return (
    <div style={{ border: "1px solid red" }}>
      <p>Child Component</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};
export default memo(ChildComp);
