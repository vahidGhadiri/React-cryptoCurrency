import BaseApi from "../base";

class MarketsServiceProvider extends BaseApi {
    constructor() {
        super();
    }

    public getMarkets() {
        return this.httpServices.get("markets")
    }
}

const marketsService = new MarketsServiceProvider()

export default marketsService