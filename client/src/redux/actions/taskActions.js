import axios from 'axios';
import { START_LOADING, STOP_LOADING} from '../constants/loadingConstants';
import {
    SHOW_ERROR_MESSAGE, SHOW_SUCCESS_MESSAGE,
} from '../constants/messageConstants';
import { 
    CREATE_TASK, 
   } from '../constants/taskConstants';


export const createTask = formData => async dispatch => {
    try {
        dispatch({ type: START_LOADING})
        const response = await axios.post('/api/task', formData);
        dispatch({ type: STOP_LOADING})
        dispatch({ 
            type: SHOW_SUCCESS_MESSAGE, 
            payload: response.data.successMessage});

        dispatch({ 
            type: CREATE_TASK, 
            payload: response.data.task});
    } catch (err) {
        console.log('createTask api error: ', err);
        dispatch({ type: STOP_LOADING });
        dispatch({
            type: SHOW_ERROR_MESSAGE,
            payload: err.response.data.errorMessage,
    });
    }
};

