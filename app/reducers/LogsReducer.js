import { fetchConstants } from "../constants/fetchConstants";

const defaultState = {
    fetching: false,
    logs: []
};

export function logsReducer(state = defaultState, action)  {
    switch (action.type) {
        case fetchConstants.FETCH_LOGS_REQUEST:
            return Object.assign({}, state, { fetching: true });

        case fetchConstants.FETCH_LOGS_SUCCESS:
            return Object.assign({}, state, { logs: action.data, fetching: false });

        case fetchConstants.FETCH_LOGS_FAILURE:
            return Object.assign({}, state, { error: action.error, fetching: false });
            
        default:
            return state;

    }
}