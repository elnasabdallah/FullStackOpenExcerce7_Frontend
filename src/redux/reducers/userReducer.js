import { CLEAR_USER, FETCH_USER, SET_USER, SET_USERS } from "../types";
const initialState = {
  signedUser: null,
  users: [],
  userDetails: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, signedUser: action.payload };
    case CLEAR_USER:
      return { ...state, signedUser: null };
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case FETCH_USER:
      return {
        ...state,
        userDetails: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
