import {ADD_NEWS, ADD_TITTLE, ALL_NEWS} from "./action";
import {DELETE_NEW} from "../admin/action";

const initialState = {
    news: [],
    addNews: '',
    title: ''
};

export const addNewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEWS:
            return {
                ...state,
                addNews: action.payload
            };
        case ADD_TITTLE:
            return {
                ...state,
                title: action.payload
            };
        case DELETE_NEW:
            return {
                ...state,
                news: action.payload
            };
        case ALL_NEWS:
            return {
                ...state,
                news: state.news.concat([action.payload]).flat(2)
            };
        default:
            return state
    }
};