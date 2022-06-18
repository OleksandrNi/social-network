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
  }, 
};

export default state;