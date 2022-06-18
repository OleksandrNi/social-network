import React from "react";
import './MyPosts.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
  return (
    <main className='profile'>
        <div>
          my posts
          <div>
            new post
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>Add post</button>
            <button>Remove post</button>
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
