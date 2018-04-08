import { utilConstants } from "../constants/utilConstants";

const defaultState = {
    searchValue: ""
};

export function searchUserReducer(state = defaultState, action)  {
    switch (action.type) {
        case utilConstants.SET_FILTER:
            return Object.assign({}, state, { searchValue: action.searchValue });
        default:
            return state;

    }
}