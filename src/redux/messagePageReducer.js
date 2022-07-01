const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body});

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
  newMessageBody: '',
}

const messagePageReducer = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      }
    
    case SEND_MESSAGE: 
      // const body = state.newMessageBody;
      return {
        ...state,
        messagesData: [...state.messagesData, {id: state.messagesData.length + 1, message: state.newMessageBody}],
        newMessageBody: "",
      }
    
    default:
      return state;
  }
};

export default messagePageReducer;