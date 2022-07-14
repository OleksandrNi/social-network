import React from "react";
import { Navigate } from "react-router-dom"
import DialogsItem from "./DialogItem/DialogsItem";
import DialogsMessage from "./DialogMessage/DialogsMessage";
import './Dialogs.scss';

class Dialogs extends React.Component {
  newMessageBody = this.props.messageReducer.newMessageBody;
  
  
  onSendMessageClick = () => {
    this.props.sendMessage();
  }

  onNewMessageChange = (event) => {
    const body = event.target.value;
    this.props.updateNewMessageBody(body);
    console.log(this.props.messageReducer.newMessageBody)
  }


  render() {

    // if (this.props.isAuth === false) {return <Navigate to={'/login'}/>}
    return (
      <div className="dialogs">
        <div className="dialogs__item">
          {this.props.messageReducer.dialogData.map(dialog => 
            <DialogsItem key={dialog.id} name={dialog.name} id={dialog.id}/>
          )}
        </div>
        <div className="gialogs__messages">
          {this.props.messageReducer.messagesData.map(message => 
              <DialogsMessage key={message.id} message={message.message} id={message.id}/>
            )}
        </div>
        <textarea 
        value={this.props.messageReducer.newMessageBody}
        onChange={this.onNewMessageChange} 
        placeholder='enter your message'></textarea>
        <button onClick={this.onSendMessageClick}>Send message</button>
      </div>
    );
  };
};

export default Dialogs;
