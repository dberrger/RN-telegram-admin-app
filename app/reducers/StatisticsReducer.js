import { fetchConstants } from "../constants/fetchConstants";

const defaultState = {
    fetching: false,
    statistics: []
};

export function statisticsReducer(state = defaultState, action)  {
    switch (action.type) {
        case fetchConstants.FETCH_STATISTICS_REQUEST:
            return Object.assign({}, state, { fetching: true });

        case fetchConstants.FETCH_STATISTICS_SUCCESS:
            return Object.assign({}, state, { statistics: action.data, fetching: false });

        case fetchConstants.FETCH_STATISTICS_FAILURE:
            return Object.assign({}, state, { error: action.error, fetching: false });
            
        default:
            return state;

    }
}