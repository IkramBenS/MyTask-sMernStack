import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducers from './reducers/userReducers';
import loadingReducer from './reducers/loadingReducers';
import messageReducer from './reducers/messageReducers';
import projectReducer from "./reducers/projectReducers";
import taskReducer from "./reducers/taskReducers";


const reducer = combineReducers({
    loading: loadingReducer,
    messages: messageReducer,
    users: userReducers,
    projects: projectReducer,
    tasks:taskReducer,

});

const initialState = {};


const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;