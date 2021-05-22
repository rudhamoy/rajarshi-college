import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  noticeDetailReducer,
  noticeListReducer,
} from "./reducers/noticeReducers";
import { userReducer } from "./reducers/userReducers";

const reducer = combineReducers({
  noticeList: noticeListReducer,
  noticeDetail: noticeDetailReducer,
  user: userReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
