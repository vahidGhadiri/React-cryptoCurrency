import * as types from "./coins.constant"
import {CoinInterface} from "../../types/coins.type";

class Actions {
    public getCoins() {
        return {
            type: types.GET_COINS
        }
    }

    public getCoin(id: string) {
        return {
            type: types.GET_COIN,
            data: id
        }
    }

    public setCoins(coins: CoinInterface) {
        return {
            type: types.SET_COINS,
            data: coins
        }
    }

    public setCoin(coin: CoinInterface) {
        return {
            type: types.SET_COIN,
            data: coin
        }
    }

    public setLoading(loading: boolean) {
        return {
            type: types.SET_LOADING,
            data: loading
        }
    }
}

const coinsActions = new Actions()

export default coinsActions