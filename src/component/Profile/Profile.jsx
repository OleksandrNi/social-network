import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import './Profile.scss';

const Profile = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

  return (
    <main className='profile'>
      <ProfileInfo 
        profile={profile} 
        status={status} 
        updateStatus={updateStatus} 
        isOwner={isOwner} 
        savePhoto={savePhoto}
        saveProfile={saveProfile}
        
      />
      <MyPostsContainer />
    </main>
  );
}

export default Profile;
