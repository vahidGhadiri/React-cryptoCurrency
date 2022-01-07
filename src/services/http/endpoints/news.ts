import BaseApi from "../base";
import {GET_NEWS} from "../../../configs/urls";

class NewsServiceProvider extends BaseApi {
    constructor() {
        super("news");
    }

    public getNews(count: string) {
        return this.httpServices.get(`${GET_NEWS.replace('{count}', count)}`)
    }
}

const newsService = new NewsServiceProvider()
export default newsService