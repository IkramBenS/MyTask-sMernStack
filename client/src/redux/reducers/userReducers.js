import { 
    DELETE_USER,
    GET_USERS,
    GET_USER,
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
        case GET_USER:
            return {
                user: action.payload,
            };
        case DELETE_USER:
            return {
                users: state.users.filter(p => p._id !== action.payload._id)
            }
            default:
                return state;
    }
};
export default userReducer;