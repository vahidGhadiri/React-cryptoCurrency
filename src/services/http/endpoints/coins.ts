import BaseApi from "../base";


class CoinsServiceProvider extends BaseApi {
    constructor() {
        super("coins");
    }

    public getCoins() {
        return this.httpServices.get("")
    }

    public getCoin(id: string) {
        return this.httpServices.get(id)
    }
}

const coinsService = new CoinsServiceProvider()

export default coinsService