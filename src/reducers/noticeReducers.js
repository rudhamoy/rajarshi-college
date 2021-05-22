import {
  NOTICE_LIST_REQUEST,
  NOTICE_LIST_SUCCESS,
  NOTICE_LIST_FAIL,
  NOTICE_DETAIL_REQUEST,
  NOTICE_DETAIL_SUCCESS,
  NOTICE_DETAIL_FAIL,
} from "../constants/noticeConstants";

export const noticeListReducer = (state = { notices: [] }, action) => {
  switch (action.type) {
    case NOTICE_LIST_REQUEST:
      return { loading: false, notices: [] };
    case NOTICE_LIST_SUCCESS:
      return { loading: true, notices: action.payload };
    case NOTICE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const noticeDetailReducer = (state = { notice: {} }, action) => {
  switch (action.type) {
    case NOTICE_DETAIL_REQUEST:
      return { loading: true, ...state };
    case NOTICE_DETAIL_SUCCESS:
      return { loading: false, notice: action.payload };
    case NOTICE_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
