import React from "react";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/messagePageReducer";
import DialogsItem from "./DialogItem/DialogsItem";
import DialogsMessage from "./DialogMessage/DialogsMessage";
import './Dialogs.scss';

const Dialogs = (props) => {

  const state = props.store.getState().messagePageReducer;
  console.log(props.store.getState())

  const newMessageBody = state.newMessageBody;

  const onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  }

  const onNewMessageChange = (event) => {
    let body = event.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  }

  return (
    <div className="dialogs">
      <div className="dialogs__item">
        {state.dialogData.map(dialog => 
          <DialogsItem key={dialog.id} name={dialog.name} id={dialog.id}/>
        )}
      </div>
      <div className="gialogs__messages">
        {state.messagesData.map(message => 
            <DialogsMessage key={message.id} message={message.message} id={message.id}/>
          )}
      </div>
      <textarea 
      value={newMessageBody}
      onChange={onNewMessageChange} 
      placeholder='enter your message'></textarea>
      <button onClick={onSendMessageClick}>Send message</button>
    </div>
  )
}

export default Dialogs;
