import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

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
    default:
      return state;
  };
};

export default profileReducer;
