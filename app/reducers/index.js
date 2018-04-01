import { combineReducers } from 'redux';
import {loginReducer} from "./LoginReducer";
import {logsReducer} from "./LogsReducer";
import {statisticsReducer} from "./StatisticsReducer";

const rootReducer = combineReducers({
    loginReducer,
    logsReducer,
    statisticsReducer
});

export default rootReducer;