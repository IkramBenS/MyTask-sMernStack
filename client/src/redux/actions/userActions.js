import axios from 'axios';
import { START_LOADING, STOP_LOADING} from '../constants/loadingConstants';
import {
    SHOW_ERROR_MESSAGE, SHOW_SUCCESS_MESSAGE,
} from '../constants/messageConstants';
import { DELETE_USER, GET_USERS,GET_USER} from '../constants/userConstants';


export const getUsers = () => async dispatch => {
    try {
        dispatch({ type: START_LOADING})
        const response = await axios.get('/api/users');
        dispatch({ type: STOP_LOADING});
        dispatch({ 
            type: GET_USERS, 
            payload: response.data.users
        });
      /*   dispatch({ 
            type: CREATE_USER, 
            payload: response.data.newUser
        }); */


    } catch (err) {
        console.log('getUsers api error: ', err);
        dispatch({ type: STOP_LOADING });
        dispatch({
            type: SHOW_ERROR_MESSAGE,
            payload: err.response.data.errorMessage,
    });
    }
};

export const deleteUser = userId => async dispatch => {
    try {
        dispatch({ type: START_LOADING})
        const response = await axios.delete(`/api/users/${userId}`);
        dispatch({ type: STOP_LOADING});
        dispatch({ 
            type: DELETE_USER, 
            payload: response.data,
        });


    } catch (err) {
        console.log('deleteUser api error: ', err);
        dispatch({ type: STOP_LOADING });
        dispatch({
            type: SHOW_ERROR_MESSAGE,
            payload: err.response.data.errorMessage,
    });
    }
};

export const getUser = (userId) => async dispatch => {
    try {
        
        const response = await axios.get(`/api/users/${userId}`);
        
        dispatch({ 
            type: GET_USER, 
            payload: response.data,
        });


    } catch (err) {
        console.log('getUser api error: ', err);
        
    }
};