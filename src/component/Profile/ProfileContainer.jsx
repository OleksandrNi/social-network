import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getStatus, getUserProfile, updateStatus } from "../../redux/profileReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import Profile from "./Profile";
import './Profile.scss';

const withRouter = (Component) => {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
        <Component
            {...props}
            router={{ location, navigate, params }}
        />
    );
  }

  return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = this.props.autorizedUserId;
      console.log('userId', this.props)
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId)
  };

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} 
      status={this.props.status} updateStatus={this.props.updateStatus}/>
    );
  };
};

const mapStateToProps =(state) => ({
  profile: state.profileReducer.profile,
  status: state.profileReducer.status,
  autorizedUserId: state.authReducer.id,
  isAuth: state.authReducer.isAuth,
});

export default compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);