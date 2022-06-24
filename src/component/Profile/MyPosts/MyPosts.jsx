import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profilePageReducer";
import './MyPosts.css';
import Post from "./Post/Post";




const MyPosts = (props) => {
  const addTextElement = React.createRef();

  const addPost = () => {
    props.dispatch(addPostActionCreator())
  };

  const onPostChange = () => {
    const text = addTextElement.current.value;
    
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <main>
        <div className='posts'>
          my posts
          <div className='posts__addPost'>
            <textarea onChange={onPostChange} ref={addTextElement} value={props.newPostText} cols="30" rows="5"/>
            <button onClick={ addPost }>Add post</button>
          </div>
          <div>
            {props.postsData.map(post => 
              <Post key={post.id} message={post.message} countLike={post.likeCount} />
            )}
          </div>
        </div>
      </main>
  )
}

export default MyPosts;
