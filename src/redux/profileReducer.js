import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

const initialState = {
  postsData: [
    {id: 1, message: 'Hello!', likeCount: 5},
    {id: 2, message: `I'm happy!`, likeCount: 15},
  ],
  profile: null,
  status: '',
};

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

export const getUserProfile = (userId) => async (dispatch) => {
  const response = await profileAPI.getProfile(userId);
  dispatch (setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId);
  dispatch (setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
  const response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch (setStatus(status));
  };
};

export const savePhoto = (file) => async (dispatch) => {
  const response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch (savePhotoSuccess(response.data.data.photos));
  }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().authReducer.id
  const response = await profileAPI.saveProfile(profile);
  if (response.data.resultCode === 0) {
    dispatch (getUserProfile(userId));
  } else {
    // const message = response.data.messages.length > 0 ? response.data.messages[0] : 'something wrong'
    // dispatch(stopSubmit('edit-profile', {_error: message}))
    // console.log('messa', message)
    let wrongNetwork = response.data.messages[0]
      .slice(
        response.data.messages[0].indexOf(">") + 1,
        response.data.messages[0].indexOf(")")
      )
      .toLocaleLowerCase();
    dispatch(
      stopSubmit("edit-profile", {
        contacts: { [wrongNetwork]: response.data.messages[0] }
      })
    );
    return Promise.reject(response.data.messages[0]);
  };
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: state.postsData.length + 1,
        message: action.newPostText,
        likeCount: Math.round(Math.random() * 10),
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: '',
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      } ;
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      } ;
    }
    case DELETE_POST: {
      return {
        ...state,
        postsData: state.postsData.filter(post => post.id !== action.postId),
      } ;
    }
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: {...state.profile, photos: action.photos}
      };
    }
    default:
      return state;
  };
};

export default profileReducer;
