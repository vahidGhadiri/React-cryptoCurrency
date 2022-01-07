import * as types from "./news.constant"
import {NewsInterface} from "../../types/news.type";

class Actions {

    public getNews() {
        return {
            type: types.GET_NEWS
        }
    }

    public setNews(news: Array<NewsInterface>) {
        return {
            type: types.SET_NEWS,
            data: news
        }
    }

    public setLoading(isLoading: boolean) {
        return {
            type: types.SET_LOADING,
            data: isLoading
        }
    }
}

const newsActions = new Actions()
export default newsActions