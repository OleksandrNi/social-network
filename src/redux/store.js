import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import { reducer as formReducer } from "redux-form";
import thunkMiddleware from "redux-thunk"
import appReducer from "./appReducer";
import authReducer from "./authReducer";
import friendsReducer from "./friendsReducer";
import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";

const reducers = combineReducers({
  profileReducer,
  messageReducer,
  friendsReducer,
  authReducer,
  appReducer,
  form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
