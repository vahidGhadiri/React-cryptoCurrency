import {CoinsActionInterface, CoinsStateInterface} from "../../types/coins.type";
import {SET_COIN, SET_COIN_HISTORY, SET_COINS, SET_LOADING} from "./coins.constant";

const initialState: CoinsStateInterface = {
    coins: [],
    coin: {},
    coinHistory: [],
    isLoading: false,
}

export const coinsReducer = (state = initialState, action: CoinsActionInterface) => {
    const {data, type} = action
    switch (type) {
        case SET_COINS:
            return {...state, coins: data}
        case SET_COIN:
            return {...state, coin: data}
        case SET_COIN_HISTORY:
            return {...state, coinHistory: data}
        case SET_LOADING:
            return {...state, isLoading: data}
        default:
            return state
    }
}