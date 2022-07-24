import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import './Profile.scss';

const Profile = ({profile, status, updateStatus}) => {

  return (
    <main className='profile'>
      <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
      <MyPostsContainer />
    </main>
  );
}

export default Profile;
