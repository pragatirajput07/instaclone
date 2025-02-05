// import { SIGN_IN, SIGN_UP } from "./ActionType";

// const initialValue = {
//     signup: null,
//     signin: null
// };

// const AuthReducer = (store = initialValue, action) => {
//     switch (action.type) {
//         case SIGN_IN:
//             return { ...store, signin: action.payload }; // Corrected 'siginin' to 'signin'
//         case SIGN_UP:
//             return { ...store, signup: action.payload };
//         default:
//             return store;
//     }
// };

// export default AuthReducer; // Ensure this is the correct export
// authReducer.js
import { SIGN_IN, SIGN_UP, SIGN_IN_ERROR, SIGN_UP_ERROR } from './ActionType';

const initialState = {
    token: null,
    user: null,
    error: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return { ...state, token: action.payload, error: null };
        case SIGN_UP:
            return { ...state, user: action.payload, error: null };
        case SIGN_IN_ERROR:
        case SIGN_UP_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

export default authReducer;
