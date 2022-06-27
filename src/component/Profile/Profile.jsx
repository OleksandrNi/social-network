import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import './Profile.scss';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {

  return (
    <main className='profile'>
      <ProfileInfo />
      <MyPostsContainer />
    </main>
  );
}

export default Profile;
