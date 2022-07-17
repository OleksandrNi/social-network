import React from "react";
import { Field, reduxForm } from "redux-form";
import { required, maxLengthCreator } from "../../utils/validators/validators";
import { Textarea } from "../common/FormsControl/FormsControl";
import DialogsItem from "./DialogItem/DialogsItem";
import DialogsMessage from "./DialogMessage/DialogsMessage";
import './Dialogs.scss';

class Dialogs extends React.Component {
  newMessageBody = this.props.messageReducer.newMessageBody;

  addNewMessage = (values) => {
    this.props.sendMessage(values.newMessageBody);
  }

  render() {

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
        
        <AddMessageFormRedux onSubmit={this.addNewMessage}/>
      </div>
    );
  };
};

const maxLength30 = maxLengthCreator(30)

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={Textarea} name="newMessageBody" placeholder='enter your message' 
      validate={[required, maxLength30]}/>
      <button>Send message</button>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;
