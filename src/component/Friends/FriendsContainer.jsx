import { connect } from "react-redux";
import { followActionCreator, setUsersActionCreator, unFollowActionCreator } from "../../redux/friendsDataReducer";
import Friends from "./Friends";

const mapStateToProps = (state) => ({
  friendsDataReducer: state.friendsDataReducer,
  users: state.friendsDataReducer.users,
});

const mapDispatchToProps = (dispatch) => ({
  follow: (userId) => {
    dispatch(followActionCreator(userId));
  },
  unfollow: (userId) => {
    dispatch(unFollowActionCreator(userId));
  },
  setUsers: (users) => {
    dispatch(setUsersActionCreator(users));
  },
});

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;
