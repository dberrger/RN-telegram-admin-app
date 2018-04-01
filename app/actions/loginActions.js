import { loginConstants } from "../constants/loginConstants";

export const loginActions = {
    loginRequest, loginSuccess, loginFailure, logout
}

function loginRequest() {
    return { type: loginConstants.LOGIN_REQUEST }
}

function loginSuccess(user) {
    return { type: loginConstants.LOGIN_SUCCESS, user }
}

function loginFailure(message) {
    return { type: loginConstants.LOGIN_FAILURE, error: message }
}

function logout(message) {
    return { type: loginConstants.LOGOUT }
}

