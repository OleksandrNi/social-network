import React from "react";
import { connect } from "react-redux";
import { follow, setCurrentPage, unfollow, toggleFollowingProgress, requestUsers } from "../../redux/friendsReducer";
import Friends from "./Friends";
import Preloader from "../common/Preloader/Preloader";
// import { Navigate } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from "../../redux/friendsSelector";

class FriendsContainer extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.requestUsers(pageNumber, this.props.pageSize);
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
  users: getUsers(state),
  pageSize: getPageSize(state),
  totalUsersCount: getTotalUsersCount(state),
  currentPage: getCurrentPage(state),
  isFetching: getIsFetching(state),
  followingInProgress: getFollowingInProgress(state),
});

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    requestUsers,
  }),
  withAuthRedirect
)(FriendsContainer)
 