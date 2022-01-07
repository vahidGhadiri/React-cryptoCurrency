import BaseApi from "../base";
import * as urls from "../../../configs/urls"

class MarketsServiceProvider extends BaseApi {
    constructor() {
        super();
    }

    public getMarkets() {
        return this.httpServices.get(urls.GET_MARKETS)
    }
}

const marketsService = new MarketsServiceProvider()

export default marketsService