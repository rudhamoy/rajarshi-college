import axios from "axios";

import {
  EVENTNEWS_LIST_REQUEST,
  EVENTNEWS_LIST_SUCCESS,
  EVENTNEWS_LIST_FAIL,
  EVENTNEWS_DETAIL_REQUEST,
  EVENTNEWS_DETAIL_SUCCESS,
  EVENTNEWS_DETAIL_FAIL,
} from "../constants/eventNewsConstants";

export const listEventNews = () => async (dispatch) => {
  try {
    dispatch({ type: EVENTNEWS_LIST_REQUEST });

    const { data } = await axios.get(
      "https://rajarshi-college.herokuapp.com/api/event_list/",
      {
        headers: {
          Authorization: `Token ${process.env.REACT_APP_AUTH_TOKEN}`,
        },
      }
    );

    dispatch({
      type: EVENTNEWS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EVENTNEWS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listEventNewsDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: EVENTNEWS_DETAIL_REQUEST });

    const { data } = await axios.get(
      `https://rajarshi-college.herokuapp.com/api/event_list/${id}/`,
      {
        headers: {
          Authorization: `Token ${process.env.REACT_APP_AUTH_TOKEN}`,
        },
      }
    );

    dispatch({
      type: EVENTNEWS_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EVENTNEWS_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
