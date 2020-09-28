export const GET_ALL_NEWS = "GET_ALL_NEWS";
export const ALLOWED_NEW = "ALLOWED_NEW";
export const DELETE_NEW = "DELETE_NEW";
export const CHECKED = "CHECKED";

export const getNews = allNews => dispatch => (
    dispatch({
        type: GET_ALL_NEWS,
        payload: allNews
    })
);

export const changeAllowed = deleted => dispatch => (
    dispatch({
        type: CHECKED,
        payload: deleted
    })
);

export const allowedNew = item => dispatch => (
    dispatch({
        type: ALLOWED_NEW,
        payload: item
    })
);