import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/messagePageReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    messagePageReducer: state.messagePageReducer,
});

const mapDispatchToProps = (dispatch) => (
  {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    }
});


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
