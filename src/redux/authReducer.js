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
        ...action.data,
        isAuth: true,
      };
    
    default:
      return state;
  };
};

export const setAuthUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}});

export const getAuthUserData = () => {
  return (dispatch) => {
      
    authApi.me().then(response => {
      if (response.data.resultCode === 0) {
        const {id, email, login} = response.data.data;
         dispatch(setAuthUserData(id, email, login));
      }
    });
  }
};

export default authReducer;
