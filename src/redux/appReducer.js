import { getAuthUserData } from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
  initialazed: false,
};

const appReducer = (state = initialState, action) => {

  switch (action.type) {
    case INITIALIZED_SUCCESS: 
      return {
        ...state,
        initialazed: true,
      };
    
    default:
      return state;
  };
};

export const initializedSuccses = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => {
  return (dispatch) => {
    let promise = dispatch(getAuthUserData())
    promise.then(() => {
      dispatch(initializedSuccses())
    })
  }
};

export default appReducer;
