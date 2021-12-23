import BaseApi from "../base";

class ExchangesServiceProvider extends BaseApi {
    constructor() {
        super("exchanges");
    }

    public getExchanges() {
        return this.httpServices.get("")
    }
}

const exchangeService = new ExchangesServiceProvider()

export default exchangeService