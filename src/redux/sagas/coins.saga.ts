import {takeEvery} from "redux-saga/effects"
import {COINS_TYPES} from "../types";
import {handleGetCoins} from "../actions/coins.action";

export function* coinsSaga() {
    yield takeEvery(COINS_TYPES.GET_COINS, handleGetCoins)
}