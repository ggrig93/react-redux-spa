import { GET_ALL_NEWS, CHECKED, ALLOWED_NEW} from "./action";

const defaultState = {
    allNews: [],
    checked: null
};

export const allNewsReducer = (state = defaultState, action) => {
  switch(action.type){
      case GET_ALL_NEWS:
          return{
              ...state,
              allNews: state.allNews.concat([action.payload]).flat(2)
          };
      case CHECKED:
          return {
              ...state,
              checked: action.payload
          };
      case ALLOWED_NEW:
          return {
              ...state,
              allNews: action.payload
          };
      default:
          return state
  }
};