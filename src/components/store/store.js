import { createStore, combineReducers } from "redux";
import adsReducer from "./ads-reducer";
import signinReducer from "./signin-reducer";
import errReducer from "./error-reducer";

const store = createStore(
  combineReducers({
    ads: adsReducer,
    signin: signinReducer,
    err: errReducer,
  })
);

export default store;
