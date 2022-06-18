import React from "react";
import './Post.css';

const Post = (props) => {
  return (
    <div>
      <div>
        { props.message }
      </div>
      <span>Like { props.countLike }</span>
    </div>
    
  )
}

export default Post;
