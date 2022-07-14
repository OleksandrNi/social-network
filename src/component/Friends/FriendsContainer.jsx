import React from "react";
import { connect } from "react-redux";
import { follow, setCurrentPage, unfollow, toggleFollowingProgress, getUsers } from "../../redux/friendsReducer";
import Friends from "./Friends";
import Preloader from "../common/Preloader/Preloader";
// import { Navigate } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class FriendsContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
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
      followingInProgress={this.props.followingInProgress}
      />
    </>
  }
}

const mapStateToProps = (state) => ({
  users: state.friendsReducer.users,
  pageSize: state.friendsReducer.pageSize,
  totalUsersCount: state.friendsReducer.totalUsersCount,
  currentPage: state.friendsReducer.currentPage,
  isFetching: state.friendsReducer.isFetching,
  followingInProgress: state.friendsReducer.followingInProgress,
});

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
  }),
  withAuthRedirect
)(FriendsContainer)
 