import {COINS_TYPES} from "../types";
import {CoinInterface} from "../../interfaces/coins.interface";
import {call, put} from "redux-saga/effects";
import coinsService from "../../api/endpoints/coins";


export const getCoins = () => ({type: COINS_TYPES.GET_COINS})
export const getCoin = () => ({type: COINS_TYPES.GET_COIN})

export const setCoins = (coins: CoinInterface) => ({
    type: COINS_TYPES.GET_COINS_SUCCESSFUL,
    data: coins
})

export const setCoin = (coin: CoinInterface) => ({
    type: COINS_TYPES.GET_COIN,
    data: coin
})

const setError = (error: any) => ({
    type: COINS_TYPES.GET_COINS_FAILURE,
    data: error
})

export function* handleGetCoins(): any {
    try {
        const response = yield call(coinsService.geCoins)
        const {coins} = response.data.data
        yield put(setCoins(coins))
    } catch (error: any) {
        yield put(setError(error.message))
    }
}


export function* handleGetCoin(): any {
    try {
        const response = yield call(() => coinsService.geCoins())
        const {coin} = response.data.data
        yield put(coin)
    } catch (error: any) {
        yield put(setError(error.message))
    }
}
