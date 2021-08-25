import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const Alert = () => {
  const alert = useSelector((state) => state.alert);
  if (alert === null) {
    return null;
  }
  const { type, msg } = alert;
  return (
    <div>
      <div className={type}>{msg}</div>
    </div>
  );
};

Alert.propTypes = {
  alert: PropTypes.object,
};
export default Alert;
