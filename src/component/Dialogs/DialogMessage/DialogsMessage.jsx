import React from "react";
import './DialogsMessage.scss';

const DialogsMessage = (props) => {
  return (
    <div className="dialogs__messages-message">{props.message}</div>
  )
}

export default DialogsMessage;
