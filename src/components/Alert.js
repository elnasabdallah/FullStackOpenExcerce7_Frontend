import React from "react";
import PropTypes from "prop-types";

const Alert = ({ alert }) => {
  const { type, msg } = alert;
  return (
    <div>
      <div className={type}>{msg}</div>
    </div>
  );
};

Alert.propTypes = {
  alert: PropTypes.object.isRequired,
};
export default Alert;
