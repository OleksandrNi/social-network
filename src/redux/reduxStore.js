import {combineReducers, legacy_createStore as createStore} from "redux";
import friendsDataReducer from "./friendsDataReducer copy";
import messagePageReducer from "./messagePageReducer";
import profilePageReducer from "./profilePageReducer";

const reducers = combineReducers({
  profilePageReducer,
  messagePageReducer,
  friendsDataReducer,
});

const store = createStore(reducers);

export default store;