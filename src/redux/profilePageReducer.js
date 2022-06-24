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
  newPostText: 'some blabla',
}

const profilePageReducer = (state = initialState, action) => {

  console.log('jjuy', action)

  switch (action.type) {
    case ADD_POST: 
      let newPost = {
        id: 5,
        message: state.newPostText,
        likeCount: 0,
      };    
      state.postsData.push(newPost);
      state.newPostText = '';
      return state;

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
  
    default:
      return state;
  };
};

export default profilePageReducer;