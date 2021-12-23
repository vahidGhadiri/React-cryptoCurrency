import BaseApi from "../base";

class MarketsServiceProvider extends BaseApi {
    constructor() {
        super("markets");
    }

    public getMarkets() {
        return this.httpServices.get("")
    }
}

const marketsService = new MarketsServiceProvider()

export default marketsService