import React from "react";
import { connect } from "react-redux";
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow } from "../../redux/friendsDataReducer";
import Friends from "./Friends";
import axios from "axios";
import Preloader from "../common/Preloader/Preloader";

class FriendsContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
    .then(response => {
      this.props.toggleIsFetching(false)
      this.props.setUsers(response.data.items);
    })
  }

  
  render() {    
    return <>
      { this.props.isFetching ? <Preloader /> : null}
      <Friends 
      totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
      currentPage={this.props.currentPage}
      onPageChanged={this.onPageChanged}
      users={this.props.users}
      follow={this.props.follow}
      unfollow={this.props.unfollow}
      />
    </>
  }
}

const mapStateToProps = (state) => ({
  friendsDataReducer: state.friendsDataReducer,
  users: state.friendsDataReducer.users,
  pageSize: state.friendsDataReducer.pageSize,
  totalUsersCount: state.friendsDataReducer.totalUsersCount,
  currentPage: state.friendsDataReducer.currentPage,
  isFetching: state.friendsDataReducer.isFetching,
});


// const mapDispatchToProps = (dispatch) => ({
//   follow: (userId) => {
//     dispatch(follow(userId));
//   },
//   unfollow: (userId) => {
//     dispatch(unFollow(userId));
//   },
//   setUsers: (users) => {
//     dispatch(setUsers(users));
//   },
//   setCurrentPage: (pageNumber) => {
//     dispatch(setCurrentPage(pageNumber));
//   },
//   setTotalUsersCount: (totalUsersCount) => {
//     dispatch(setTotalUsersCount (totalUsersCount));
//   },
//   toggleIsFetching: (isFetching) => {
//     dispatch(toggleIsFetching (isFetching));
//   },
// });

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
})(FriendsContainer);
