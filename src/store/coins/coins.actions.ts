import * as types from "./coins.constant"
import {CoinsStateInterface} from "../../types/coins.type";

class Actions {
    public getCoins(count: number) {
        return {
            type: types.GET_COINS,
            data: count
        }
    }

    public getCoin(id: string) {
        return {
            type: types.GET_COIN,
            data: id
        }
    }

    public getCoinHistory(id: string, timeFrame: string) {
        return {
            type: types.GET_COIN_HISTORY,
            data: {id, timeFrame}
        }
    }

    public setCoins(coins: Pick<CoinsStateInterface, "coins">) {
        return {
            type: types.SET_COINS,
            data: coins
        }
    }

    public setCoin(coin: Pick<CoinsStateInterface, "coin">) {
        return {
            type: types.SET_COIN,
            data: coin
        }
    }

    public setCoinHistory(history: Array<string>) {
        return {
            type: types.SET_COIN_HISTORY,
            data: history
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