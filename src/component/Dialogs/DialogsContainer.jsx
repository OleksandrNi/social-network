import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/messageReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
// import { Navigate } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

const mapStateToProps = (state) => ({
    messageReducer: state.messageReducer,
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

const AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
