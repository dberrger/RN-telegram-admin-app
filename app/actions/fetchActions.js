import { fetchConstants } from "../constants/fetchConstants";

export const fetchActions = {
    fetchLogsRequest, fetchLogsSuccess, fetchLogsFailure,
    fetchStatisticsRequest, fetchStatisticsSuccess, fetchStatisticsFailure
}

function fetchLogsRequest() {
    return { type: fetchConstants.FETCH_LOGS_REQUEST }
}

function fetchLogsSuccess(data) {
    return { type: fetchConstants.FETCH_LOGS_SUCCESS, data }
}

function fetchLogsFailure(message) {
    return { type: fetchConstants.FETCH_LOGS_FAILURE, error: message }
}


function fetchStatisticsRequest() {
    return { type: fetchConstants.FETCH_STATISTICS_REQUEST }
}

function fetchStatisticsSuccess(data) {
    return { type: fetchConstants.FETCH_STATISTICS_SUCCESS, data }
}

function fetchStatisticsFailure(message) {
    return { type: fetchConstants.FETCH_STATISTICS_FAILURE, error: message }
}
