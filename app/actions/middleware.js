import { services } from "../services/services";
import { loginActions } from "./loginActions";
import { fetchActions } from "./fetchActions";

export const middleware = {
    login,
    logout,
    getLogs,
    getStatistics
}

function login(username, password) {
    return dispatch => {
        dispatch(loginActions.loginRequest());

        services.login(username, password)
                    .then(
                        user => {
                            dispatch(loginActions.loginSuccess(user));
                        },
                        error => {
                            dispatch(loginActions.loginFailure(error));
                        }
                    );
    }
}

function logout() { 

    return dispatch => {
        console.log(services.logout());
        services.logout() 
            ? null
            : dispatch(loginActions.logout()); 
    }
}

function getLogs() {
    return dispatch => {
        dispatch(fetchActions.fetchLogsRequest());

        services.logs()
                    .then(
                        data => {
                            dispatch(fetchActions.fetchLogsSuccess(data));
                        },
                        error => {
                            dispatch(fetchActions.fetchLogsFailure(error));
                        }
                    );
    }
}

function getStatistics(filterVal) {
    return dispatch => {
        dispatch(fetchActions.fetchStatisticsRequest());

        services.statistics(filterVal)
                    .then(
                        data => {
                            dispatch(fetchActions.fetchStatisticsSuccess(data));
                        },
                        error => {
                            dispatch(fetchActions.fetchStatisticsFailure(error));
                        }
                    );
    }
}