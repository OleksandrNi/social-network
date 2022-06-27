const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});

const initialState = {
  postsData: [
    {id: 1, message: 'Hello!', likeCount: 5},
    {id: 2, message: `I'm happy!`, likeCount: 15},
  ],
  newPostText: '',
};

const profilePageReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: state.postsData.length + 1,
        message: state.newPostText,
        likeCount: Math.round(Math.random() * 10),
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: '',
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      } ;
    }
    default:
      return state;
  };
};

export default profilePageReducer;
