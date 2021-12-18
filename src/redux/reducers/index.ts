import {combineReducers} from "redux";
import {exchangesReducer} from "./exchanges.reducer";
import {marketReducer} from "./markets.reducer";

export const RootReducer = combineReducers({
    exchange: exchangesReducer,
    market: marketReducer
})