import React, { useState, useImperativeHandle } from "react";

const Toggleable = React.forwardRef((prop, ref) => {
  const [visibility, setVisibility] = useState(false);
  const showWhenVisble = { display: visibility ? "" : "none" };
  const hideWhenVisible = { display: visibility ? "none" : "" };

  const toggleVisibility = () => {
    setVisibility(!visibility);
  };
  useImperativeHandle(ref, () => {
    return toggleVisibility;
  });
  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={() => toggleVisibility(true)}>{prop.label}</button>
      </div>
      <div style={showWhenVisble}>
        {prop.children}
        <button onClick={() => toggleVisibility(false)}>cancel</button>
      </div>
    </div>
  );
});
Toggleable.displayName = "Toggleable";
export default Toggleable;
