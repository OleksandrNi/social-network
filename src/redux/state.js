const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

const store = {
  _state: {
    messagePage: {
      dialogData: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Elina'},
        {id: 3, name: 'Maksim'}
      ],
      messagesData: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are You?'},
        {id: 3, message: 'Bue!'}
      ],
      newMessageBody: '',
    },
    profilePage: {
      postsData: [
        {id: 1, message: 'Hello!', likeCount: 5},
        {id: 2, message: `I'm happy!`, likeCount: 15},
      ],
      newPostText: 'some blabla',
    }, 
    friendsData: [
      {id: 1, name: 'Alex'},
      {id: 2, name: 'Elina'},
      {id: 3, name: 'Maksim'}
    ],
  },
  _callSubscriber() {
    console.log('State is changed')
  },

  getState() {
    return this._state;
  },
  subsriber(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likeCount: 0,
      };    
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else  if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.messagePage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else  if (action.type === SEND_MESSAGE) {
      const body = this._state.messagePage.newMessageBody;
      this._state.messagePage.newMessageBody = '';
      this._state.messagePage.messagesData.push({id: 11, message: body});
      this._callSubscriber(this._state);
    }
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
});

window.store = store;

export default store;