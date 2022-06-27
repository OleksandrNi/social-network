import {combineReducers, legacy_createStore as createStore} from "redux";
import friendsDataReducer from "./friendsDataReducer";
import messagePageReducer from "./messagePageReducer";
import profilePageReducer from "./profilePageReducer";

const reducers = combineReducers({
  profilePageReducer,
  messagePageReducer,
  friendsDataReducer,
});

const store = createStore(reducers);

window.store = store;

export default store;