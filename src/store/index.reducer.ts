import {combineReducers} from "redux";

import {coinsReducer} from "./coins/coins.reducer";
import {exchangesReducer} from "./exchanges/exchanges.reducer";
import {marketsReducer} from "./markets/markets.reducer";
import {statsReducer} from "./stats/stats.reducer";


export const RootReducer = combineReducers({
    coins: coinsReducer,
    exchanges: exchangesReducer,
    markets: marketsReducer,
    stats: statsReducer
})