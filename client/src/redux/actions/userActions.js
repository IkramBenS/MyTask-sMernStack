import axios from 'axios';
/* import { START_LOADING, STOP_LOADING} from '../constants/loadingConstants';
import {
    SHOW_ERROR_MESSAGE, SHOW_SUCCESS_MESSAGE,
} from '../constants/messageConstants'; */
import { /* CREATE_USER */ GET_USERS} from '../constants/userConstants';


export const getUsers = () => async dispatch => {
    try {
        /* dispatch({ type: START_LOADING}) */
        const response = await axios.get('/api/users');
        /* dispatch({ type: STOP_LOADING}); */
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
        /* dispatch({ type: STOP_LOADING }); */
        /* dispatch({
            type: SHOW_ERROR_MESSAGE,
            payload: err.response.data.errorMessage,
    }); */
    }
};
