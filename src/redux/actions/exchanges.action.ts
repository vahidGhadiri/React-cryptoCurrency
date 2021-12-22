import {call, put} from "redux-saga/effects"
import {EXCHANGES_TYPES} from "../types"
import * as api from "../../api/api"
import {ExchangesInterface} from "../../interfaces/exchanges.interface";


export const getExchanges = () => ({
    type: EXCHANGES_TYPES.GET_EXCHANGES
})

export const setExchanges = (exchanges: ExchangesInterface) => ({
    type: EXCHANGES_TYPES.GET_EXCHANGES_SUCCESSFUL,
    data: exchanges
})


export const setError = (err: any) => ({
    type: EXCHANGES_TYPES.GET_EXCHANGES_FAILURE,
    data: err
})

export function* handleGetExchanges(): any {
    try {
        const response = yield call(api.getExchanges)
        const {exchanges} = response.data.data
        yield  put(setExchanges(exchanges))
    } catch (err) {
        yield put(setError(err))
    }
}
