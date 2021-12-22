import {CoinsActionInterface, CoinsInitialStateInterface} from "../../interfaces/coins.interface";
import {COINS_TYPES} from "../types";

const initialState: CoinsInitialStateInterface = {
    coins: [],
    coin: {},
    isLoading: false,
    error: ""
}

export const coinsReducer = (state = initialState, action: CoinsActionInterface) => {
    const {
        GET_COINS,
        GET_COIN,
        GET_COINS_SUCCESSFUL,
        GET_COINS_FAILURE,
        GET_COIN_SUCCESSFUL,
        GET_COIN_FAILURE
    } = COINS_TYPES
    switch (action.type) {
        case GET_COINS:
        case GET_COIN:
            return {...state, isLoading: true}
        case GET_COINS_SUCCESSFUL:
            return {...state, coins: action.data, isLoading: false}
        case GET_COIN_SUCCESSFUL:
            return {...state, coin: action.data, isLoading: false}
        case GET_COINS_FAILURE:
        case GET_COIN_FAILURE:
            return {...state, error: action.data, isLoading: false}
        default:
            return state
    }
}