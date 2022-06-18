import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import './Profile.scss';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

  // const postsData = [
  //   {id: 1, message: 'Hello!', likeCount: 5},
  //   {id: 2, message: `I'm happy!`, likeCount: 15},
  // ];

  return (
    <main className='profile'>
        <ProfileInfo />
        <MyPosts postsData={props.postsData}/>
      </main>
  )
}

export default Profile;
