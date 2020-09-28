export const AUTH_CHANGE_EMAIL = "AUTH_CHANGE_EMAIL";
export const AUTH_CHANGE_PASSWORD = "AUTH_CHANGE_PASSWORD";
export const IS_ADMIN = "IS_ADMIN";
export const IS_AUTH = "IS_AUTH";

export const setEmail = email => dispatch => (
    dispatch({
        type: AUTH_CHANGE_EMAIL,
        payload: email
    })
);

export const setPassword = password => dispatch => (
    dispatch({
        type: AUTH_CHANGE_PASSWORD,
        payload: password
    })
);

export const isAdminMethod = isAdmin => dispatch => (
    dispatch({
        type: IS_ADMIN,
        payload: isAdmin
    })
);

export const isAuthMethod = isAuth => dispatch => (
    dispatch({
        type: IS_AUTH,
        payload: isAuth
    })
);
