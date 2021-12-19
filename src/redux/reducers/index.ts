import {combineReducers} from "redux";
import {exchangesReducer} from "./exchanges.reducer";
import {marketsReducer} from "./markets.reducer";
import {coinsReducer} from "./coins.reducer";

export const RootReducer = combineReducers({
    exchange: exchangesReducer,
    market: marketsReducer,
    coin: coinsReducer
})