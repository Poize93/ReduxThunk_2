import {
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_ERROR,
  FETCH_NEWS_SUCCESS,
} from "./newsAction";

const intialState = { news: [], isLoading: false, eror: null };

const newsReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_REQUEST:
      return { news: [], isLoading: true, eror: null };
    case FETCH_NEWS_SUCCESS:
      return { news: action.payload, isLoading: false, eror: null };
    case FETCH_NEWS_ERROR:
      return { news: [], isLoading: false, eror: action.payload };
    default:
      return state;
  }
};

export default newsReducer;
