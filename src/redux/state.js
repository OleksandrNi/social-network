let rerenderEntireTree = () => {
  console.log('State is changed')
}

const state = {
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
};

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likeCount: 0,
  };

  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

window.state = state;

export const updateNewPostText = (newText) => {

  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export const subsriber = (observer) => {
  rerenderEntireTree = observer;
}

export default state;