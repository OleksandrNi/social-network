import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import './Profile.scss';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

  return (
    <main className='profile'>
        <ProfileInfo />
        <MyPosts 
        postsData={props.profilePage.postsData} 
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch} />
      </main>
  )
}

export default Profile;
