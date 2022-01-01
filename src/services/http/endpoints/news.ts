import BaseApi from "../base";

class NewsServiceProvider extends BaseApi {
    constructor() {
        super("");
    }

    public getNews() {
        return this.httpServices.get("")
    }
}

const newsService = new NewsServiceProvider()
export default newsService
