export const getUsers = (state) => {
  return state.friendsReducer.users;
}

export const getPageSize = (state) => {
  return state.friendsReducer.pageSize;
}

export const getTotalUsersCount = (state) => {
  return state.friendsReducer.totalUsersCount;
}

export const getCurrentPage = (state) => {
  return state.friendsReducer.currentPage;
}

export const getIsFetching = (state) => {
  return state.friendsReducer.isFetching;
}

export const getFollowingInProgress = (state) => {
  return state.friendsReducer.followingInProgress;
}