import {
  EVENTNEWS_LIST_REQUEST,
  EVENTNEWS_LIST_SUCCESS,
  EVENTNEWS_LIST_FAIL,
  EVENTNEWS_DETAIL_REQUEST,
  EVENTNEWS_DETAIL_SUCCESS,
  EVENTNEWS_DETAIL_FAIL,
} from "../constants/eventNewsConstants";

export const eventNewsListReducer = (state = { eventNews: [] }, action) => {
  switch (action.type) {
    case EVENTNEWS_LIST_REQUEST:
      return { loading: false, eventNews: [] };
    case EVENTNEWS_LIST_SUCCESS:
      return { loading: true, eventNews: action.payload };
    case EVENTNEWS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const eventNewsDetailsReducer = (
  state = { eventNewsDetail: {} },
  action
) => {
  switch (action.type) {
    case EVENTNEWS_DETAIL_REQUEST:
      return { loading: true, ...state };
    case EVENTNEWS_DETAIL_SUCCESS:
      return { loading: false, eventNewsDetail: action.payload };
    case EVENTNEWS_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
