const {
    //LOGIN,
    REGISTER,
    LOGOUT,
    /*GET_PROFILE,
    GET_ALL_USERS*/
} = require("./types");

const initialState = {
    users: [],
    user: {}
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        /*case LOGIN:
            return {
                ...state,
                user: action.payload
            };
        case GET_PROFILE:
            return {
                ...state,
                user: action.payload
            };*/

        case REGISTER:
            return {
                ...state,
                user: action.payload
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
            }
        default:
            return state;*/
    }
}
export default reducer;