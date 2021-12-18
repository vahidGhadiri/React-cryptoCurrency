import * as types from "../types"
import {call, put} from "redux-saga/effects";
import * as api from "../../apis/markets.api"


export const getMarkets = () => ({
    type: types.MARKETS_TYPES.GET_MARKETS
})

const setMarkets = (markets: any) => ({
    type: types.MARKETS_TYPES.GET_MARKETS_SUCCESSFUL,
    data: markets
})

const setError = (err: any) => ({
    type: types.MARKETS_TYPES.GET_MARKETS_FAILURE,
    data: err
})

export function* handleGetMarkets(): any {
    try {
        const response = yield call(api.getMarkets)
        const {markets} = response.data.data
        yield put(setMarkets(markets))
    } catch (error) {
        yield put(setError(error))
    }
}