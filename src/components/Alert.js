import React from "react";

const Alert = ({ alert }) => {
  const { type, msg } = alert;
  return (
    <div>
      <div className={type}>{msg}</div>
    </div>
  );
};

export default Alert;
