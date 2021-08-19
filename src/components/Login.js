import React, { useState } from "react";
import PropTypes from "prop-types";
import Alert from "./Alert";

const Login = ({ handleLogin, alert }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState();
  const onSubmit = e => {
    e.preventDefault();
    handleLogin({ username, password });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>Login to the application</h1>

        {alert && <Alert alert={alert} />}
        <div>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            onChange={({ target }) => setUsername(target.value)}
            value={username}
          ></input>
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            onChange={({ target }) => setPassword(target.value)}
            value={password}
          ></input>
        </div>
        <input id='submit' type='submit' value='Login' />
      </form>
    </div>
  );
};
Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  alert: PropTypes.object,
};
export default Login;
