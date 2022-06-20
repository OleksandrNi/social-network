import React from "react";
import DialogsItem from "./DialogItem/DialogsItem";
import DialogsMessage from "./DialogMessage/DialogsMessage";
import './Dialogs.scss';

const Dialogs = (props) => {

  const addMessageElement = React.createRef();

  const addMessage = () => {
    const text = addMessageElement.current.value;
    alert(text);
  }

  return (
    <div className="dialogs">
      <div className="dialogs__item">
        {props.state.dialogData.map(dialog => 
          <DialogsItem key={dialog.id} name={dialog.name} id={dialog.id}/>
        )}
      </div>
      <div className="gialogs__messages">
        {props.state.messagesData.map(message => 
            <DialogsMessage key={message.id} message={message.message} id={message.id}/>
          )}
      </div>
      <textarea ref={addMessageElement} cols="30" rows="5"></textarea>
      <button onClick={addMessage}>Send message</button>
    </div>
  )
}

export default Dialogs;
