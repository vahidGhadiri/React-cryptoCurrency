import {COINS_TYPES} from "../types";
import {CoinsInterface} from "../../interfaces/coins.interface";
import * as api from "../../api/api"
import {call, put} from "redux-saga/effects";


export const getCoins = () => ({type: COINS_TYPES.GET_COINS})

export const setCoins = (coins: CoinsInterface) => ({
    type: COINS_TYPES.GET_COINS_SUCCESSFUL,
    data: coins
})

const setError = (error: any) => ({
    type: COINS_TYPES.GET_COINS_FAILURE,
    data: error
})

export function* handleGetCoins(): any {
    try {
        const response = yield call(api.getCoins)
        const {coins} = response.data.data
        yield put(setCoins(coins))
    } catch (error: any) {
        yield put(setError(error.message))
    }
}