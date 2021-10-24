import { GET_PROJECTS ,CREATE_PROJECT,DELETE_PROJECT,GET_PROJECT} from "../constants/projectConstants";

const INITIAL_STATE = {
       projects: [],
};

const projectReducers = (state = INITIAL_STATE, action) => {
       switch (action.type) {
              case GET_PROJECTS:
                     return {
                            ...state,
                            projects: [...action.payload],
                     };
                     case CREATE_PROJECT:
                            return {
                                   ...state,
                                   projects: [...state.projects, action.payload],
                            };
                     case GET_PROJECT:
                                   return {
                                          proj: action.payload,
                                   };
                     
                     case DELETE_PROJECT:
                                   return {
                                          projects: state.projects.filter((p) => p._id !== action.payload._id),
                                   };
              
              default:
                     return state;
       }
};

export default projectReducers;

