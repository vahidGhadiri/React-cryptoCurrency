import {all, call, put, takeEvery} from "redux-saga/effects";

import coinsActions from "./coins.actions";
import {CoinsActionInterface} from "../../types/coins.type";
import coinsService from "../../services/http/endpoints/coins";
import {GET_COIN, GET_COIN_HISTORY, GET_COINS} from "./coins.constant";


export function* getCoins(action: CoinsActionInterface) {
    const query = `?limit=${action.data}`
    yield put(coinsActions.setLoading(true))
    try {
        const response: CoinsActionInterface = yield call(() => coinsService.getCoins(query))
        const {coins} = response.data.data
        yield put(coinsActions.setCoins(coins))
    } finally {
        yield put(coinsActions.setLoading(false))
    }
}

export function* getCoin(action: CoinsActionInterface) {
    yield put(coinsActions.setLoading(true))
    try {
        const response: CoinsActionInterface = yield call(() => coinsService.getCoin(action.data))
        const {coin} = response.data.data
        yield put(coinsActions.setCoin(coin))
    } finally {
        yield put(coinsActions.setLoading(false))
    }
}

export function* getCoinHistory(action: CoinsActionInterface) {
    yield put(coinsActions.setLoading(true))
    try {
        const response: CoinsActionInterface = yield call(
            () => coinsService.getCoinHistory(action.data.id, action.data.timeFrame)
        )
        const {history} = response.data.data
        yield put(coinsActions.setCoinHistory(history))
    } finally {
        yield put(coinsActions.setLoading(false))
    }
}

export function* coinsSaga() {
    yield all([
        takeEvery(GET_COINS, getCoins),
        takeEvery(GET_COIN, getCoin),
        takeEvery(GET_COIN_HISTORY, getCoinHistory)
    ])
}

