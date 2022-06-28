import React from "react";
import { connect } from "react-redux";
import { followActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator, setUsersActionCreator, unFollowActionCreator } from "../../redux/friendsDataReducer";
import Friends from "./Friends";
import axios from "axios";

class FriendsContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
    .then(response => {
      this.props.setUsers(response.data.items);
    })
  }

  
  render() {    
    return <Friends 
    totalUsersCount={this.props.totalUsersCount}
    pageSize={this.props.pageSize}
    currentPage={this.props.currentPage}
    onPageChanged={this.onPageChanged}
    users={this.props.users}
    follow={this.props.follow}
    unfollow={this.props.unfollow}
    /> 
  }
}

const mapStateToProps = (state) => ({
  friendsDataReducer: state.friendsDataReducer,
  users: state.friendsDataReducer.users,
  pageSize: state.friendsDataReducer.pageSize,
  totalUsersCount: state.friendsDataReducer.totalUsersCount,
  currentPage: state.friendsDataReducer.currentPage,
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
  setCurrentPage: (pageNumber) => {
    dispatch(setCurrentPageActionCreator(pageNumber));
  },
  setTotalUsersCount: (totalUsersCount) => {
    dispatch(setTotalUsersCountActionCreator (totalUsersCount));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer);
