import {applyMiddleware, combineReducers, createStore} from "redux";
import accountReducer from "./account-reducer";
import historyReducer from "./history-reducer";
import settingsReducer from "./settings-reducer";
import thunkMiddleWare from "redux-thunk";

const reducers = combineReducers({
    account: accountReducer,
    history: historyReducer,
    settings: settingsReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleWare));

// @ts-ignore
window.store = store;

export default store;
