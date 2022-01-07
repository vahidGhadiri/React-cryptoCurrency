import BaseApi from "../base";
import {GET_NEWS} from "../../../configs/urls";

class NewsServiceProvider extends BaseApi {
    constructor() {
        super("news");
    }

    public getNews() {
        return this.httpServices.get(GET_NEWS)
    }
}

const newsService = new NewsServiceProvider()
export default newsService