import { utilConstants } from "../constants/utilConstants";

export function setFilter(searchValue) {
    return { type: utilConstants.SET_FILTER, searchValue }
}
