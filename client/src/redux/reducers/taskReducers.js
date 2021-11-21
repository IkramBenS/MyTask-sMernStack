import { 
    CREATE_TASK, 
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

            default:
                return state;
    }
};
export default taskReducer;