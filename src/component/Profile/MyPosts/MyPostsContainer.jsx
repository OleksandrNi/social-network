import { addPostActionCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    postsData: state.profileReducer.postsData,
    newPostText: state.profileReducer.newPostText,
});

const mapDispatchToProps = (dispatch) => ({
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText))
    }
});

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
