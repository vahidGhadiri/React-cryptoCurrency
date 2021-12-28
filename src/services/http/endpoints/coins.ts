import BaseApi from "../base";
import * as urls from "../../../configs/urls"


class CoinsServiceProvider extends BaseApi {
    constructor() {
        super("");
    }

    public getCoins(count: string) {
        return this.httpServices.get(`${urls.GET_COINS}${count}`)
    }

    public getCoin(id: string) {
        return this.httpServices.get(urls.GET_COIN.replace('{id}', id))
    }

    public getCoinHistory(id: string, timeFrame: string) {
        return this.httpServices.get(urls.GET_COIN_HISTORY
            .replace("{id}", id)
            .replace("{timeFrame}", timeFrame)
        )
    }
}

const coinsService = new CoinsServiceProvider()

export default coinsService