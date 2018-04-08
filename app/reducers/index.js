import { combineReducers } from 'redux';
import {loginReducer} from "./LoginReducer";
import {logsReducer} from "./LogsReducer";
import {statisticsReducer} from "./StatisticsReducer";
import {searchUserReducer} from "./SearchUserReducer";

const rootReducer = combineReducers({
    loginReducer,
    logsReducer,
    statisticsReducer,
    searchUserReducer
});

export default rootReducer;