import {
  CLEAR_USER,
  FETCH_USER,
  SET_ALERT,
  SET_USER,
  SET_USERS,
} from "../types";
import loginServices from "./../../services/login";
import blogService from "./../../services/blogs";
import userServices from "./../../services/user";

export const login = (loginDetails) => async (dispatch) => {
  try {
    const user = await loginServices.login(loginDetails);
    dispatch({ type: SET_USER, payload: user });

    window.localStorage.setItem("loggedlogerUser", JSON.stringify(user));
    blogService.setToken(user.token);
  } catch (error) {
    const alert = { type: "error", msg: "Invalid username or password" };
    dispatch({ type: SET_ALERT, payload: alert });
  }
};
export const setUser = (user) => (dispatch) => {
  dispatch({ type: SET_USER, payload: user });
};
export const logout = () => (dispatch) => {
  dispatch({ type: CLEAR_USER });
  window.localStorage.clear();
};
export const fetchUsers = () => async (dispatch) => {
  try {
    const users = await userServices.getAll();

    dispatch({ type: SET_USERS, payload: users });
  } catch (error) {
    const alert = { type: "error", msg: error };
    dispatch({ type: SET_ALERT, payload: alert });
  }
};

export const fetchUser = (id) => async (dispatch, getState) => {
  const {
    user: { signedUser },
  } = getState();
  try {
    const token = `bearer ${signedUser.token}`;
    const userDetails = await userServices.getUser(id, token);

    dispatch({ type: FETCH_USER, payload: userDetails });
  } catch (error) {
    const alert = { type: "error", msg: error };
    dispatch({ type: SET_ALERT, payload: alert });
  }
};
