const {
    LOGIN,
    LOGOUT,
    GET_PROFILE,
    /*GET_ALL_USERS*/
    GET_MOVIES
} = require("./types");

const initialState = {
    users: [],
    user: {},
    movies: [],
    orders: []
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.payload
            };
        case GET_PROFILE:
            return {
                ...state,
                orders: action.payload
            };
        case LOGOUT:
            return {
                ...state,
                user: action.payload
            };
        /*case GET_ALL_USERS:
            return {
                ...state,
                users: action.payload
            }*/
        case GET_MOVIES:
            return {
                ...state,
                movies: action.payload
            }

        default:
            return state;
    }
}
export default reducer;