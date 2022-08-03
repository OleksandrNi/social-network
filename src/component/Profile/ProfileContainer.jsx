/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getStatus, getUserProfile, savePhoto, saveProfile, updateStatus } from "../../redux/profileReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import Profile from "./Profile";
import './Profile.scss';
import { useEffect } from "react";

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
  };

  return ComponentWithRouterProp;
}

const ProfileContainer = (props) => {
  useEffect(() => {
    let userId = props.router.params.userId;
    if (!userId) {
      userId = props.autorizedUserId;
    }
    props.getUserProfile(userId);
    props.getStatus(userId);
  }, [props.router.params.userId]);

    return (
      <Profile 
        {...props} 
        profile={props.profile} 
        status={props.status} 
        updateStatus={props.updateStatus}
        isOwner={!props.router.params.userId}
        savePhoto={props.savePhoto}
        saveProfile={props.saveProfile}
      />
    );
  };

const mapStateToProps =(state) => ({
  profile: state.profileReducer.profile,
  status: state.profileReducer.status,
  autorizedUserId: state.authReducer.id,
  isAuth: state.authReducer.isAuth,
});

export default compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);