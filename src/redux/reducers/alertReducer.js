import { SET_ALERT, RESET_ALERT } from "./../types";

const alertReducer = (state = null, action) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        type: action.payload.type,
        msg: action.payload.msg,
      };
    case RESET_ALERT:
      return null;
    default:
      return state;
  }
};
export default alertReducer;
