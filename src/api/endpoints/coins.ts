import BaseApi from "../base";
import {GET_COIN, GET_COINS} from "../../configs/urls";


class CoinsServiceProvider extends BaseApi {
    constructor() {
        super();
    }

    public getCoins() {
        return this.httpServices.get(`${GET_COINS}`)
    }

    public getCoin(id: string) {
        return this.httpServices.get(`${GET_COIN.replace(id, "{id}")}`)
    }
}

const coinsService = new CoinsServiceProvider()

export default coinsService