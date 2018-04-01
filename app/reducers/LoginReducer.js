import { loginConstants } from "../constants/loginConstants";

const defaultState = {
    isLoggedIn: false,
    user: {
        username: '',
        password: ''
    }
};

export function loginReducer(state = defaultState, action)  {
    switch (action.type) {
        case loginConstants.LOGIN_REQUEST:
            return Object.assign({}, state, { result: "request" });

        case loginConstants.LOGIN_SUCCESS:
            return Object.assign({}, state, { user: action.user, isLogged: true });

        case loginConstants.LOGIN_FAILURE:
            return Object.assign({}, state, { result: action.error, isLogged: false });
        
        case loginConstants.LOGOUT:
            return Object.assign({}, state, { result: "logged out", isLogged: false });
        default:
            return state;

    }
}