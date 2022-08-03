import { stopSubmit } from "redux-form";
import { authApi, securityApi } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

const initialState = {
  id: null,
  email: '',
  login: '',
  isAuth: false,
  isFetching: false,
  captchaUrl: null,
};

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_USER_DATA: 
      return {
        ...state,
        ...action.payload,
      };

    case GET_CAPTCHA_URL_SUCCESS: 
      return {
        ...state,
        ...action.payload,
      };
 
    default:
      return state;
  };
};

export const setAuthUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload:{id, email, login, isAuth}});

export const getCaptchaUrlSuccess = (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCESS, payload:{captchaUrl}});

export const getAuthUserData = () => async (dispatch) => {
  const response = await authApi.me();
  if (response.data.resultCode === 0) {
    const {id, email, login} = response.data.data;
      dispatch(setAuthUserData(id, email, login, true));
  };
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  const response = await authApi.login(email, password, rememberMe, captcha);
  if (response.data.resultCode === 0) { 
      dispatch(getAuthUserData());
  } else {
    if (response.data.resultCode === 10) {
      dispatch(getCaptchaUrl());
    }
    const message = response.data.messages.length > 0 ? response.data.messages[0] : 'something wrong'
    dispatch(stopSubmit('login', {_error: message}))
  };
};

export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityApi.getCaptchaUrl();
  const captchaUrl = response.data.url
  dispatch(getCaptchaUrlSuccess(captchaUrl))
};


export const logout = () => async (dispatch) => {      
  const response = await authApi.logout();
  if (response.data.resultCode === 0) { 
    dispatch(setAuthUserData(null, null, null, false));
  };
};


export default authReducer;
