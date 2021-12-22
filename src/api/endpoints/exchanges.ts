import BaseApi from "../base";

class ExchangesServiceProvider extends BaseApi {
    constructor() {
        super('');
    }

    public getExchanges() {
        return this.httpServices.get("exchanges")
    }
}

export default ExchangesServiceProvider