import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    postsData: state.profilePageReducer.postsData,
    newPostText: state.profilePageReducer.newPostText
});

const mapDispatchToProps = (dispatch) => ({
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text))
    },
    addPost: () => {
      dispatch(addPostActionCreator())
    }
});

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
