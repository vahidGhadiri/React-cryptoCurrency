import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import {MarketsInitialStateInterface} from "../interfaces/markets.interface";
import {ExchangesInitialStateInterface} from "../interfaces/exchanges.interface";
import {RootReducer} from "./index.reducer";
import {CoinsInitialStateInterface} from "../interfaces/coins.interface";
import RootSaga from "./index.saga";


export interface StoreInterface {
    exchange: ExchangesInitialStateInterface
    market: MarketsInitialStateInterface
    coin: CoinsInitialStateInterface
}

// @ts-ignore
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware()

export const index = createStore(RootReducer, enhancer(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(RootSaga)