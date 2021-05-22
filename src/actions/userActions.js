import {
  USER_LOGIN_REQUEST,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
} from "../constants/userConstants";
import { auth } from "../firebase";

// export const login = (email, password) => async (dispatch) => {
//     try {
//         dispatch({
//             type: USER_LOGIN_REQUEST
//         })
//     } catch (error) {

//     }
// }

export const signup = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_SIGNUP_REQUEST,
    });

    const data = auth.createUserWithEmailAndPassword(email, password);

    dispatch({
      type: USER_SIGNUP_SUCCESS,
      payload: data,
    });
  } catch (error) {}
};
