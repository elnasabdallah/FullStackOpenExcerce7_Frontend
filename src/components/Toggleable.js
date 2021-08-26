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
    <div className="row align-items-center text-center mt-5">
      <div style={hideWhenVisible} className="row">
        <div className="col-12">
          <button
            className="btn w-50 btn-primary mb-5"
            onClick={() => toggleVisibility(true)}
          >
            {prop.label}
          </button>
        </div>
      </div>
      <div style={showWhenVisble}>
        {prop.children}
        <div className="row">
          <div className="col-12">
            <button
              className="w-50 btn btn-primary mb-5"
              onClick={() => toggleVisibility(false)}
            >
              cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});
Toggleable.displayName = "Toggleable";
export default Toggleable;
