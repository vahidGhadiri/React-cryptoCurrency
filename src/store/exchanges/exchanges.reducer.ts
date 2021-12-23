import {ExchangesActionInterface, ExchangesInitialStateInterface} from "../../types/exchanges.type";
import {SET_EXCHANGES, SET_LOADING} from "./exchanges.constant";

const initialState: ExchangesInitialStateInterface = {
    exchanges: [],
    isLoading: false,
}

export const exchangesReducer = (state = initialState, action: ExchangesActionInterface) => {
    const {type, data} = action
    switch (type) {
        case SET_EXCHANGES:
            return {...state, exchanges: data}
        case SET_LOADING:
            return {...state, isLoading: data}
        default:
            return state
    }
}