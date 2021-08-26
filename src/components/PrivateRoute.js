import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { signedUser } = useSelector((state) => state.user);
  return (
    <div>
      <Route
        {...rest}
        render={(props) =>
          !signedUser ? <Redirect to="/login" /> : <Component {...props} />
        }
      />
    </div>
  );
};
PrivateRoute.propTypes = {
  component: PropTypes.object,
};
export default PrivateRoute;
