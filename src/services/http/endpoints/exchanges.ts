import BaseApi from "../base";
import * as urls from "../../../configs/urls"

class ExchangesServiceProvider extends BaseApi {
    constructor() {
        super();
    }

    public getExchanges() {
        return this.httpServices.get(urls.GET_EXCHANGES)
    }
}

const exchangeService = new ExchangesServiceProvider()

export default exchangeService