import * as types from "./news.constant"
import {NewsInterface} from "../../types/news.type";

class Actions {

    public getNews(category: string, count: string) {
        return {
            type: types.GET_NEWS,
            data: {category, count}
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