import {CoinsActionInterface, CoinsInitialStateInterface} from "../../interfaces/coins.interface";
import {GET_COINS, GET_COINS_FAILURE, GET_COINS_SUCCESSFUL} from "./coins.constant";

const initialState: CoinsInitialStateInterface = {
    coins: [],
    isLoading: false,
    error: ""
}

export const coinsReducer = (state = initialState, action: CoinsActionInterface) => {
    switch (action.type) {
        case GET_COINS:
            return {...state, isLoading: true}
        case GET_COINS_SUCCESSFUL:
            return {...state, coins: action.data, isLoading: false}
        case GET_COINS_FAILURE:
            return {...state, error: action.data, isLoading: false}
        default:
            return state
    }
}