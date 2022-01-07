import {NewsActionInterface, NewsStateInterface} from "../../types/news.type";
import {SET_LOADING, SET_NEWS} from "./news.constant";


const initialState: NewsStateInterface = {
    news: [],
    isLoading: false
}

export const newsReducer = (state = initialState, action: NewsActionInterface) => {
    const {type, data} = action
    switch (type) {
        case SET_NEWS:
            return {...state, news: data}
        case SET_LOADING :
            return {...state, isLoading: data}
        default:
            return state
    }
}