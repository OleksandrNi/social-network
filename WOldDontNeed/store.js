import friendsDataReducer from "./friendsDataReducer copy";
import messagePageReducer from "../src/redux/messagePageReducer";
import profilePageReducer from "../src/redux/profilePageReducer";

      // ([
      //   {id: 1, photoUrl: photoUrl, followed: true, fullName: 'Alex', status: `wait of some`, location: {country: 'Ukraine', city: 'Odessa'}},
      //   {id: 2, photoUrl: photoUrl, followed: false, fullName: 'Elena', status: `hello everybody`, location: {country: 'Ukraine', city: 'Odessa'}},
      //   {id: 3, photoUrl: photoUrl, followed: true, fullName: 'Max', status: `glad to see You`, location: {country: 'Ukraine', city: 'Odessa'}},    
      // ]);

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

    this._state.profilePage = profilePageReducer(this._state.profilePage, action);
    this._state.messagePage = messagePageReducer(this._state.messagePage, action);
    this._state.friendsData = friendsDataReducer(this._state.friendsData, action);

    this._callSubscriber(this._state);
  }
}

export default store;