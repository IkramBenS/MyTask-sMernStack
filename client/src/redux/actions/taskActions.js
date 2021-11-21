import axios from 'axios';
import { START_LOADING, STOP_LOADING} from '../constants/loadingConstants';
import {
    SHOW_ERROR_MESSAGE, SHOW_SUCCESS_MESSAGE,
} from '../constants/messageConstants';
import { 
    CREATE_TASK, GET_TASKS,DELETE_TASK,GET_TASK
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

export const getTasks = () => async dispatch => {
    try {
        dispatch({ type: START_LOADING})
        const response = await axios.get('/api/task');
        dispatch({ type: STOP_LOADING});
        dispatch({ 
            type: GET_TASKS, 
            payload: response.data.tasks
        });

    } catch (err) {
        console.log('getTasks api error: ', err);
        dispatch({ type: STOP_LOADING });
        dispatch({
            type: SHOW_ERROR_MESSAGE,
            payload: err.response.data.errorMessage,
    });
    }
};
export const deleteTask = taskId => async dispatch => {
	try {
		dispatch({ type: START_LOADING });
		const response = await axios.delete(`/api/task/${taskId}`);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: DELETE_TASK,
			payload: response.data,
		});
	} catch (err) {
		console.log('deleteTask api error: ', err);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: SHOW_ERROR_MESSAGE,
			payload: err.response.data.errorMessage,
		});
	}
};
export const getTask = (taskId) => async (dispatch) => {
    try {
           dispatch({ type: START_LOADING });
           const response = await axios.get(`/api/task/${taskId}`);
           dispatch({ type: STOP_LOADING });
           dispatch({
                  type: GET_TASK,
                  payload: response.data,
           });
    } catch (err) {
           console.log("getTask api error: ", err);
           dispatch({ type: STOP_LOADING });
           dispatch({
                  type: SHOW_ERROR_MESSAGE,
                  payload: err.response.data.errorMessage,
           });
    }
  };