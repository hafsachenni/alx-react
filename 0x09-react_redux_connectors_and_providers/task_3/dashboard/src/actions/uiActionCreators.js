import {LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE} from "./uiActionTypes";
import "node-fetch";


export const login = (email, password) => {
    return{
        type: LOGIN,
        user: { email, password },
    };
};
export const boundingLogin = (email, password) => dispatch(login(email, password));




export const logout = () => {
    return {
      type: LOGOUT,
    };
};
export const boundingLogout = () => dispatch(logout());



  
export const displayNotificationDrawer = () => {
    return {
      type: DISPLAY_NOTIFICATION_DRAWER,
    };
};
export const boundingDisplayNotificationDrawer = () => dispatch(displayNotificationDrawer());





export const hideNotificationDrawer = () => {
    return {
      type: HIDE_NOTIFICATION_DRAWER,
    };
};
export const boundingHideNotificationDrawer = () => dispatch(hideNotificationDrawer());




export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
  };
};



export const loginFailure = () => {
  return {
    type: LOGIN_FAILURE,
  };
};

export const loginRequest = (email, password) => {
  return (dispatch) => {
    dispatch(login(email, password));
    return fetch('http://localhost:8564/login-success.json')
      .then(response => response.json())
      .then((json) => dispatch(loginSuccess()))
      .catch((error) => dispatch(loginFailure()));
  };
};
