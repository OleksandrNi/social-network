import { authApi } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
  id: null,
  email: '',
  login: '',
  isAuth: false,
  isFetching: false,
};

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_USER_DATA: 
      return {
        ...state,
        ...action.payload,
      };
    
    default:
      return state;
  };
};

export const setAuthUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload:
  {id, email, login, isAuth}});

export const getAuthUserData = () => {
  return (dispatch) => {
      
    authApi.me().then(response => {
      if (response.data.resultCode === 0) {
        const {id, email, login} = response.data.data;
         dispatch(setAuthUserData(id, email, login, true));
      }
    });
  }
};

export const login = (email, password, rememberMe) => {
  return (dispatch) => {
      
    authApi.login(email, password, rememberMe).then(response => {
      if (response.data.resultCode === 0) { 
         dispatch(getAuthUserData());
      }
    });
  }
};

export const logout = () => {
  return (dispatch) => {
      
    authApi.logout().then(response => {
      if (response.data.resultCode === 0) { 
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
  }
};

export default authReducer;