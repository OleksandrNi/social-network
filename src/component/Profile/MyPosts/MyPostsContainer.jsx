import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profilePageReducer";
import MyPosts from "./Myposts";
import './MyPosts.css';
import Post from "./Post/Post";




const MyPostsContainer = (props) => {
  const addTextElement = React.createRef();

  const addPost = () => {
    props.dispatch(addPostActionCreator())
  };

  const onPostChange = () => {
    const text = addTextElement.current.value;
    
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <MyPosts/>
  )
}

export default MyPostsContainer;
