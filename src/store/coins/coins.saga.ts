import {all, call, put, takeEvery} from "redux-saga/effects";
import coinsService from "../../api/endpoints/coins";
import coinsActions from "./coins.actions";
import {GET_COINS} from "./coins.constant";

export function* getCoins(): any {
    try {
        const response = yield call(() => coinsService.getCoins())
        const {coins} = response.data.data
        yield put(coinsActions.setCoins(coins))
    } catch (error: any) {
        yield put(coinsActions.setError(error.message))
    }
}


export function* coinsSaga() {
    yield all([
        takeEvery(GET_COINS, getCoins)
    ])
}

