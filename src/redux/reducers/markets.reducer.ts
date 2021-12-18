import {MARKETS_TYPES} from "../types";
import {MarketsActionInterface, MarketsInitialStateInterface} from "../../interfaces/markets.interface";

const initialState: MarketsInitialStateInterface = {
    markets: [],
    isLoading: false,
    error: ""
}

export const marketReducer = (state = initialState, action: MarketsActionInterface) => {
    const {GET_MARKETS_SUCCESSFUL, GET_MARKETS_FAILURE, GET_MARKETS} = MARKETS_TYPES
    switch (action.type) {
        case GET_MARKETS:
            return {...state, isLoading: true}
        case GET_MARKETS_SUCCESSFUL:
            return {...state, markets: action.data, isLoading: false}
        case GET_MARKETS_FAILURE:
            return {...state, error: action.data, isLoading: false}
        default:
            return state
    }
}