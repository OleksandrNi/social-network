const SEND_MESSAGE = 'SEND-MESSAGE';

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

const initialState = {
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
}

const messageReducer = (state = initialState, action) => {

  switch (action.type) {
    case SEND_MESSAGE: 
      return {
        ...state,
        messagesData: [...state.messagesData, {id: state.messagesData.length + 1, message: action.newMessageBody}],
      }
    
    default:
      return state;
  }
};

export default messageReducer;