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
    <nav className="navbar navbar-dark bg-dark justify-content-space-between">
      <div className="container justify-content-start">
        <h2 className="navbar-brand">
          <Link className="nav-link text-light" to="/">
            Blogs
          </Link>
        </h2>
        <ul className="navbar-nav  align-items-center mx-5 flex-row">
          <li className="nav-item mx-3">
            <Link className="nav-link " to="/">
              blogs
            </Link>
          </li>
          <li className="nav-item mx-3 ">
            <Link className="nav-link" to="/users">
              users
            </Link>{" "}
          </li>
        </ul>
        <div className="ms-auto d-flex flex-row align-items-center">
          <span className="text-light mx-2">
            {signedUser.name}
            <span className="text-muted mx-2"> logged In</span>
          </span>{" "}
          <button className="btn btn-primary mx-2" onClick={logOut}>
            logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
