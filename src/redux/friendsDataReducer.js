const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


export const followActionCreator = (userId) => ({type: FOLLOW, userId });
export const unFollowActionCreator = (userId) => ({type: UNFOLLOW, userId });
export const setUsersActionCreator = (users) => ({type: SET_USERS, users });

const initialState = {
  users: [],
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
        users: [...state.users, ...action.users],
      };
    
    default:
      return state;
  };
};

export default friendsDataReducer;
