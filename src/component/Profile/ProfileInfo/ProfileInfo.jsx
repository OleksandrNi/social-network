import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import { useState } from "react";
import ProfileDataFormReduxForm from "./ProfileDataForm";
import './ProfileInfo.scss';

const ProfileInfo = ({profile, status, isOwner, updateStatus, savePhoto, saveProfile}) => {

  const [editMode, setEditMode] = useState(false)

  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (event) => {
    if (event.target.files.length) {
      savePhoto(event.target.files[0]);
    }
  }
  
  const onSubmit = (formData) => {
    console.log(formData)
    saveProfile(formData).then(
      () => {
        setEditMode(false)
      }
    )
  }

  return (
    <div>
      <ProfileStatus status={status} updateStatus={updateStatus}/>
      <div> {profile.photos.small 
      ? <img src={profile.photos.small} alt="user avatar" />
      : null}
      </div>
      {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
        
      {editMode 
        ? <ProfileDataFormReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> 
        : <ProfileData 
          profile={profile} 
          isOwner={isOwner} 
          goToEditMode={() => {setEditMode(true)}}/>
      }
      {/* <ProfileData profile={props.profile}/> */}
    </div>
  )
}


const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return <div>
    {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
    <div><b> My id: </b>{profile.userId}</div>
    <div>Friends call me: {profile.fullName}</div>
    <div>About me: {profile.aboutMe}</div>
    <div>Looking for a JOB: {profile.lookingForAJob ? 'YEAP!!!' : 'NO!NO!NO!'}</div>
    <div> {profile.lookingForAJob ? `What Job I need? -> ${profile.lookingForAJobDescription}` : ''}</div>
    <div>
      <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
      })}
    </div>
  </div>
}

const Contact = ({contactTitle, contactValue}) => {
  return <div>
    <b>{contactTitle}</b>: {contactValue}
  </div>
}

export default ProfileInfo;
