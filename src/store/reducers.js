import { combineReducers } from 'redux';
import {authReducer} from "./auth/reducers";
import {addNewsReducer} from "./addNews/reducer";
import {allNewsReducer} from "./admin/reducer";



export default combineReducers({
    auth: authReducer,
    news: addNewsReducer,
    admin: allNewsReducer
});