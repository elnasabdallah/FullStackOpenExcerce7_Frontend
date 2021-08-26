import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Alert from "./Alert";
import { login } from "./../redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const {
    alert,
    user: { signedUser },
  } = useSelector((state) => state);
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ username, password }));
  };
  const history = useHistory();
  useEffect(() => {
    if (signedUser) {
      history.push("/");
    }
  }, [signedUser]);
  return (
    <div className="d-flex  justify-content-center">
      <form onSubmit={onSubmit} className="w-50">
        <h1>Login </h1>

        {alert && <Alert alert={alert} />}

        <div className="row mb-2">
          <div className="col-sm-12">
            <input
              type="text"
              id="username"
              required
              placeholder="Enter username"
              className="form-control"
              onChange={({ target }) => setUsername(target.value)}
              value={username}
            ></input>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-sm-12">
            <input
              type="password"
              id="password"
              required
              placeholder=" Enter password"
              className="form-control"
              onChange={({ target }) => setPassword(target.value)}
              value={password}
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <input
              className="form-control btn btn-primary mb-3"
              id="submit"
              required
              type="submit"
              value="Login"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  alert: PropTypes.object,
};
export default Login;
