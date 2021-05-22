import axios from "axios";

import {
  NOTICE_LIST_REQUEST,
  NOTICE_LIST_SUCCESS,
  NOTICE_LIST_FAIL,
  NOTICE_DETAIL_REQUEST,
  NOTICE_DETAIL_SUCCESS,
  NOTICE_DETAIL_FAIL,
} from "../constants/noticeConstants";

export const listNotice = () => async (dispatch) => {
  try {
    dispatch({ type: NOTICE_LIST_REQUEST });

    const token = "1ec938106f39d6172fb57e36fa23c0d0432c40f6";

    const { data } = await axios.get(
      "https://nicksdb.pythonanywhere.com/api/notice_list/",
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );

    dispatch({
      type: NOTICE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NOTICE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listNoticeDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: NOTICE_DETAIL_REQUEST });

    const { data } = await axios.get(
      `https://nicksdb.pythonanywhere.com/api/notice_list/${id}/`,
      {
        headers: {
          Authorization: `Token ${process.env.REACT_APP_AUTH_TOKEN}`,
        },
      }
    );

    dispatch({
      type: NOTICE_DETAIL_SUCCESS,
      payload: data,
    });

    console.log(data);
  } catch (error) {
    dispatch({
      type: NOTICE_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
