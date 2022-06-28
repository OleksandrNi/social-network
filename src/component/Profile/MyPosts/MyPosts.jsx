import React from "react";
import './MyPosts.css';
import Post from "./Post/Post";

class MyPosts extends React.Component {
  addTextElement = React.createRef();

  onAddPost = () => {
    this.props.addPost();
  };

  onPostChange = () => {
    const text = this.addTextElement.current.value;
    this.props.updateNewPostText(text)
  };

  render() {
    return (
      <main>
          <div className='posts'>
            my posts
            <div className='posts__addPost'>
              <textarea onChange={this.onPostChange} ref={this.addTextElement} value={this.props.newPostText} cols="30" rows="5"/>
              <button onClick={this.onAddPost}>Add post</button>
            </div>
            <div>
              {this.props.postsData.map(post => 
                <Post key={post.id} message={post.message} countLike={post.likeCount} />
              )}
            </div>
          </div>
        </main>
    )
  }
}

export default MyPosts;
