import {SET_LOADING, SET_STATS} from "./stats.constant";
import {StatsActionInterface, StatsStateInterface} from "../../types/stats.type";

const initialState: StatsStateInterface = {
    stats: {},
    isLoading: false
}

export const statsReducer = (state = initialState, action: StatsActionInterface) => {
    const {data, type} = action
    switch (type) {
        case SET_STATS:
            return {...state, stats: data}
        case SET_LOADING:
            return {...state, isLoading: data}
        default:
            return state
    }
}