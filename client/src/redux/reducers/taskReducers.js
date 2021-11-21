import { 
    CREATE_TASK, DELETE_TASK, GET_TASKS,GET_TASK
} from '../constants/taskConstants';

const INITIAL_STATE = {
    tasks: [],
};

const taskReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_TASK:
            return {
                tasks: [...state.tasks, action.payload],
            }
        
        case GET_TASKS:
                return {
                    tasks: [...action.payload],
                };
        case DELETE_TASK:
                return {
                      tasks: state.tasks.filter((t) => t._id !== action.payload._id),
                    };
         case GET_TASK:
                        return {
                               task: action.payload,
                        };
        
         default:
                return state;
    }
};
export default taskReducer;