import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/actions/userAction";

const Header = () => {
  /***logout function***/
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logout());
  };
  const { signedUser } = useSelector((state) => state.user);
  if (!signedUser) return null;
  return (
    <div>
      <div style={headerStyle}>
        <Link to="/">blogs</Link> {"  "}
        <Link to="/users">users</Link> {"  "} {signedUser.name} logged In{" "}
        <button onClick={logOut}>logout</button>
      </div>
      <h2>blogs</h2>
    </div>
  );
};

const headerStyle = {
  paddingTop: 5,
  marginBottom: 5,
  background: "#aaadb3",
};

export default Header;
