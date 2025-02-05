import { legacy_createStore, combineReducers, applyMiddleware } from "redux";

import AuthReducer from '../Redux/Auth/AuthReducer'; // Ensure this path is correct
import { thunk } from "redux-thunk";
import { userReducer } from "../Redux/User/Reducers";

const rootReducers = combineReducers({
    auth: AuthReducer,
    user:userReducer
});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
