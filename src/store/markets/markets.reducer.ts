import {MarketsActionInterface, MarketsInitialStateInterface} from "../../types/markets.type";
import {SET_LOADING, SET_MARKETS} from "./markets.constant";

const initialState: MarketsInitialStateInterface = {
    markets: [],
    isLoading: false,
}

export const marketsReducer = (state = initialState, action: MarketsActionInterface) => {
    const {data, type} = action
    switch (type) {
        case SET_MARKETS:
            return {...state, markets: data}
        case SET_LOADING:
            return {...state, isLoading: data}
        default:
            return state
    }
}