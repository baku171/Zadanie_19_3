import { combineReducers } from 'redux';
import comments from "./comments";


const initialState = {
    comments: [],
    users: []
};

const app = combineReducers({
    comments
});

// function app(state = initialState, action) {
//     return {
//         comments: comments(state.comments, action),
//         users: users(state.users, action)
//     };
// }