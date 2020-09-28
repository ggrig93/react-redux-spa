import {DELETE_NEW} from "../admin/action";

export const ADD_NEWS = "ADD_NEWS";
export const ALL_NEWS = "ALL_NEWS";
export const ADD_TITTLE = "ADD_TITTLE";

export const onChangeNews = addNews => dispatch => (
    dispatch({
        type: ADD_NEWS,
        payload: addNews
    })
);

export const onChangeTitle = title => dispatch => (
    dispatch({
        type: ADD_TITTLE,
        payload: title
    })
);

export const addNews = news => dispatch => (
    dispatch({
        type: ALL_NEWS,
        payload: news
    })
);

export const deleteNew = singleNew => dispatch => (
    dispatch({
        type: DELETE_NEW,
        payload: singleNew
    })
);