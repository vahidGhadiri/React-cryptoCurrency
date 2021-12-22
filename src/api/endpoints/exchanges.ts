import BaseApi from "../base";

class ExchangesServiceProvider extends BaseApi {
    constructor() {
        super();
    }

    public getExchanges() {
        return this.httpServices.get("exchanges")
    }
}

const exchangeService = new ExchangesServiceProvider()

export default exchangeService