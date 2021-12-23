import * as types from "./coins.constant"
import {CoinInterface} from "../../types/coins.type";

class Actions {
    public getCoins() {
        return {
            type: types.GET_COINS
        }
    }

    public setCoins(coins: CoinInterface) {
        return {
            type: types.SET_COINS,
            data: coins
        }
    }

    public setLoading(loading: boolean) {
        return {
            type: "",
            data: loading
        }
    }
}

const coinsActions = new Actions()

export default coinsActions