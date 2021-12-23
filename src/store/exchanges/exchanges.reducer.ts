import {ExchangesActionInterface, ExchangesInitialStateInterface} from "../../interfaces/exchanges.interface";
import {GET_EXCHANGES, GET_EXCHANGES_FAILURE, GET_EXCHANGES_SUCCESSFUL} from "./exchanges.constant";

const initialState: ExchangesInitialStateInterface = {
    exchanges: [],
    isLoading: false,
    error: ""
}

export const exchangesReducer = (state = initialState, action: ExchangesActionInterface) => {
    switch (action.type) {
        case GET_EXCHANGES:
            return {...state, isLoading: true}
        case GET_EXCHANGES_SUCCESSFUL:
            return {...state, exchanges: action.data, isLoading: false}
        case GET_EXCHANGES_FAILURE:
            return {...state, error: action.data, isLoading: false}
        default:
            return state
    }
}