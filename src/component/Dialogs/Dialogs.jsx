import React from "react";
import DialogsItem from "./DialogItem/DialogsItem";
import DialogsMessage from "./DialogMessage/DialogsMessage";
import './Dialogs.scss';

const Dialogs = (props) => {
  return (
    <div className="dialogs">
      <div className="dialogs__item">
        {props.dialogData.map(dialog => 
          <DialogsItem key={dialog.id} name={dialog.name} id={dialog.id}/>
        )}
      </div>
      <div className="gialogs__messages">
        {props.messagesData.map(message => 
            <DialogsMessage key={message.id} message={message.message} id={message.id}/>
          )}
      </div>
    </div>
  )
}

export default Dialogs;
