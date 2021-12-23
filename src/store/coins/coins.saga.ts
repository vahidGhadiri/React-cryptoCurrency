import {all, call, put, takeEvery} from "redux-saga/effects";
import coinsService from "../../services/http/endpoints/coins";
import coinsActions from "./coins.actions";
import {GET_COINS} from "./coins.constant";


export function* getCoins(): any {
    yield put(coinsActions.setLoading(true))
    try {
        const response = yield call(() => coinsService.getCoins())
        const {coins} = response.data.data
        yield put(coinsActions.setCoins(coins))
    } finally {
        yield put(coinsActions.setLoading(false))
    }
}


export function* coinsSaga() {
    yield all([
        takeEvery(GET_COINS, getCoins)
    ])
}

