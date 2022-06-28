const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';


export const followActionCreator = (userId) => ({type: FOLLOW, userId });
export const unFollowActionCreator = (userId) => ({type: UNFOLLOW, userId });
export const setUsersActionCreator = (users) => ({type: SET_USERS, users });
export const setCurrentPageActionCreator = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCountActionCreator = (totalUsersCount) => ({type: SET_TOTAL_USERS, totalUsersCount });

const initialState = {
  users: [],
  pageSize: 7,
  totalUsersCount: 0,
  currentPage: 1,
};

const friendsDataReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW: 
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: true}
          }
          return user;
        })
      };
    
    case UNFOLLOW: 
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: false}
          }
          return user;
        })
      };

    case SET_USERS: 
    return {
      ...state,
      users: [...action.users],
    };

    case SET_CURRENT_PAGE: 
    return {
      ...state,
      currentPage: action.currentPage,
    };
    
    case SET_TOTAL_USERS: 
    return {
      ...state,
      totalUsersCount: action.totalUsersCount,
    };
    default:
      return state;
  };
};

export default friendsDataReducer;
