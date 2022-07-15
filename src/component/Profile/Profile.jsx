import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import './Profile.scss';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

  return (
    <main className='profile'>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
      <MyPostsContainer />
    </main>
  );
}

export default Profile;
