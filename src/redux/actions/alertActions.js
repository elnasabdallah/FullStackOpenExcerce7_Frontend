import { RESET_ALERT, SET_ALERT } from "./../types";

export const setAlert = (alert) => (dispatch) => {
  dispatch({ type: SET_ALERT, payload: alert });

  setTimeout(() => {
    dispatch({ type: RESET_ALERT });
  }, 5000);
};
