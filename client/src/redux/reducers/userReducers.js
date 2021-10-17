import { 
    GET_USERS
    /* CREATE_USER */
} from '../constants/userConstants';

const INITIAL_STATE = {
    users: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        /* case CREATE_USER:
            return {
                users: [...state.users, action.payload],
            }  */   
        case GET_USERS:
            return {
                users: [...action.payload],
            };
            default:
                return state;
    }
};
export default userReducer;