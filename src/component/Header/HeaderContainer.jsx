import React from "react";
import { connect } from "react-redux";
import { logout } from "../../redux/authReducer";
import Header from "./Header";

class HeaderContainer extends React.Component {

  
  render() {
    return (
      <Header {...this.props}/>
    )
  }
}

const mapStateToProps =(state) => ({
  isAuth: state.authReducer.isAuth,
  login: state.authReducer.login,
});

export default connect (mapStateToProps, {logout})(HeaderContainer);