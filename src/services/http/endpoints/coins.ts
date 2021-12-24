import BaseApi from "../base";
import * as urls from "../../../configs/urls"


class CoinsServiceProvider extends BaseApi {
    constructor() {
        super("");
    }

    public getCoins() {
        return this.httpServices.get(urls.GET_COINS)
    }

    public getCoin(id: string): any {
        return this.httpServices.get(urls.GET_COIN.replace('{id}', id))
    }
}

const coinsService = new CoinsServiceProvider()

export default coinsService