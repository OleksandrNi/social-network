import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import './ProfileInfo.scss';
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
      <div> {props.profile.photos.small 
      ? <img src={props.profile.photos.small} alt="user avatar" />
      : null}
      </div>
      <div>My id: {props.profile.userId}</div>
      <div>Friends call me: {props.profile.fullName}</div>
      <div>About me: {props.profile.aboutMe}</div>
      <div>{props.profile.contacts.facebook ? `My facebook: ${props.profile.contacts.facebook}` : ''}</div>
      <div>Looking for a JOB: {props.profile.lookingForAJob ? 'YEAP!!!' : 'NO!NO!NO!'}</div>
      <div> {props.profile.lookingForAJob ? `What Job I need? -> ${props.profile.lookingForAJobDescription}` : ''}</div>
    </div>
  )
}

export default ProfileInfo;
