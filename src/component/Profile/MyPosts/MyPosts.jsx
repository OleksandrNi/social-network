import React from "react";
import { Field, reduxForm } from "redux-form";
import './MyPosts.css';
import Post from "./Post/Post";
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from "../../common/FormsControl/FormsControl";

const MyPosts = (props) => {

  const onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <main>
      <div className='posts'>
        my posts
        <AddNewPostForm onSubmit={onAddPost} />
        <div>
          {props.postsData.map(post => 
            <Post key={post.id} message={post.message} countLike={post.likeCount} />
          )}
        </div>
      </div>
    </main>
  )
}
const maxLength10 = maxLengthCreator(10)

let AddNewPostForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit} className='posts__addPost'>
    <Field component={Textarea} name="newPostText"
      validate={[required, maxLength10]} placeholder={'Post message'} />
      <button>Add post</button>
    </form>
  )
}

AddNewPostForm = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;
