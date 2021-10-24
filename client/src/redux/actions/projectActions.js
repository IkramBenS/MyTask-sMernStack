import { START_LOADING, STOP_LOADING } from "../constants/loadingConstants";
import { SHOW_ERROR_MESSAGE , SHOW_SUCCESS_MESSAGE} from "../constants/messageConstants";
import { GET_PROJECTS, CREATE_PROJECT ,DELETE_PROJECT , GET_PROJECT} from "../constants/projectConstants";
import axios from "axios";

export const getProjects = () => async (dispatch) => {
  try {
    //dispatch({ type: START_LOADING });
    const response = await axios.get("/api/project");
    //dispatch({ type: STOP_LOADING });
    dispatch({ type: GET_PROJECTS, payload: response.data.projects });
  } catch (err) {
    console.log("getProjects api error: ", err);
    // dispatch({ type: STOP_LOADING });
    // dispatch({
    //   type: SHOW_ERROR_MESSAGE,
    //   payload: err.response.data.errorMessage,
    // });
  }
};

export const createProject = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    dispatch({ type: START_LOADING });
    const response = await axios.post("/api/project", formData, config);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_SUCCESS_MESSAGE,
      payload: response.data.successMessage,
    });
    dispatch({ type: CREATE_PROJECT, payload: response.data.project });
  } catch (err) {
    console.log("createProject api error: ", err);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: err.response.data.errorMessage,
    });
  }
};

export const getProject = (projectId) => async (dispatch) => {
  try {
         dispatch({ type: START_LOADING });
         const response = await axios.get(`/api/project/${projectId}`);
         dispatch({ type: STOP_LOADING });
         dispatch({
                type: GET_PROJECT,
                payload: response.data,
         });
  } catch (err) {
         console.log("getProject api error: ", err);
         dispatch({ type: STOP_LOADING });
         dispatch({
                type: SHOW_ERROR_MESSAGE,
                payload: err.response.data.errorMessage,
         });
  }
};



export const deleteProject = projectId => async dispatch => {
	try {
		dispatch({ type: START_LOADING });
		const response = await axios.delete(`/api/project/${projectId}`);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: DELETE_PROJECT,
			payload: response.data,
		});
	} catch (err) {
		console.log('deleteProject api error: ', err);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: SHOW_ERROR_MESSAGE,
			payload: err.response.data.errorMessage,
		});
	}
};