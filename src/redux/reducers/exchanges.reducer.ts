import {EXCHANGES_TYPES} from "../types";
import {ExchangesActionInterface, ExchangesInitialStateInterface} from "../../interfaces/exchanges.interface";

const initialState: ExchangesInitialStateInterface = {
    exchanges: [],
    isLoading: false,
    error: ""
}

export const exchangesReducer = (state = initialState, action: ExchangesActionInterface) => {
    const {GET_EXCHANGES, GET_EXCHANGES_SUCCESSFUL, GET_EXCHANGES_FAILURE} = EXCHANGES_TYPES
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