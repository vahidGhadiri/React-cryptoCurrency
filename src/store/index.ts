import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import {MarketsInitialStateInterface} from "../types/markets.type";
import {ExchangesInitialStateInterface} from "../types/exchanges.type";
import {RootReducer} from "./index.reducer";
import {CoinsInitialStateInterface} from "../types/coins.type";
import RootSaga from "./index.saga";
import {StatsInitialStateInterface} from "../types/stats.type";


export interface StoreInterface {
    exchanges: ExchangesInitialStateInterface
    markets: MarketsInitialStateInterface
    coins: CoinsInitialStateInterface
    stats: StatsInitialStateInterface
}

// @ts-ignore
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware()

export const index = createStore(RootReducer, enhancer(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(RootSaga)