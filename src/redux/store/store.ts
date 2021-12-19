import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import {RootReducer} from "../reducers";
import {RootSaga} from "../sagas";
import {MarketsInitialStateInterface} from "../../interfaces/markets.interface";
import {ExchangesInitialStateInterface} from "../../interfaces/exchanges.interface";


export interface StoreInterface {
    exchange: ExchangesInitialStateInterface
    market: MarketsInitialStateInterface
}

// @ts-ignore
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(RootReducer, enhancer(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(RootSaga)