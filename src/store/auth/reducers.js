import {AUTH_CHANGE_EMAIL, AUTH_CHANGE_PASSWORD, IS_ADMIN, IS_AUTH} from "./actions";

const defaultState = {
    email: '',
    password: '',
    isAuth: false,
    isAdmin: false,
};

export const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case AUTH_CHANGE_EMAIL:
            return {
                ...state,
                email: action.payload
            };
        case AUTH_CHANGE_PASSWORD:
            return {
                ...state,
                password: action.payload
            };
        case IS_AUTH:
            return {
                ...state,
                isAuth: action.payload
            };
        case IS_ADMIN:
            return {
                ...state,
                isAdmin: action.payload
            };
        default:
            return state
    }
};
