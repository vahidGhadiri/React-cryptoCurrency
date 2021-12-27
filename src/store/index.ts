import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import {RootReducer} from "./index.reducer";
import RootSaga from "./index.saga";
import {ExchangesStateInterface} from "../types/exchanges.type";
import {StatsStateInterface} from "../types/stats.type";
import {MarketsStateInterface} from "../types/markets.type";
import {CoinsStateInterface} from "../types/coins.type";


export interface StoreInterface {
    exchanges: ExchangesStateInterface
    markets: MarketsStateInterface
    coins: CoinsStateInterface
    stats: StatsStateInterface
}

// @ts-ignore
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware()

export const index = createStore(RootReducer, enhancer(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(RootSaga)