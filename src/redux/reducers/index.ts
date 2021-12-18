import {combineReducers} from "redux";
import {exchangesReducer} from "./exchanges.reducer";

export const RootReducer = combineReducers({
    exchange: exchangesReducer
})