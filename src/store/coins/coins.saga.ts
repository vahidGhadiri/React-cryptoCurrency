import {all, call, put, takeEvery} from "redux-saga/effects";

import coinsService from "../../services/http/endpoints/coins";
import coinsActions from "./coins.actions";
import {GET_COIN, GET_COINS} from "./coins.constant";
import {CoinsActionInterface} from "../../types/coins.type";


export function* getCoins() {
    yield put(coinsActions.setLoading(true))
    try {
        const response: CoinsActionInterface = yield call(() => coinsService.getCoins())
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

export function* coinsSaga() {
    yield all([
        takeEvery(GET_COIN, getCoin),
        takeEvery(GET_COINS, getCoins),
    ])
}

