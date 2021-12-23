import {MarketsActionInterface, MarketsInitialStateInterface} from "../../interfaces/markets.interface";
import {GET_MARKETS, GET_MARKETS_FAILURE, GET_MARKETS_SUCCESSFUL} from "./markets.constant";

const initialState: MarketsInitialStateInterface = {
    markets: [],
    isLoading: false,
    error: ""
}

export const marketsReducer = (state = initialState, action: MarketsActionInterface) => {
    const {data, type} = action
    switch (type) {
        case GET_MARKETS:
            return {...state, isLoading: true}
        case GET_MARKETS_SUCCESSFUL:
            return {...state, markets: data, isLoading: false}
        case GET_MARKETS_FAILURE:
            return {...state, error: data, isLoading: false}
        default:
            return state
    }
}