import * as types from "./coins.constant"
import {CoinInterface} from "../../interfaces/coins.interface";
import {AxiosError} from "axios";

class Actions {
    public getCoins() {
        return {
            type: types.GET_COINS
        }
    }

    public setCoins(coins: CoinInterface) {
        return {
            type: types.GET_COINS_SUCCESSFUL,
            data: coins
        }
    }

    public setError(err: AxiosError) {
        return {
            type: types.GET_COINS_FAILURE,
            data: err
        }
    }
}

const coinsActions = new Actions()

export default coinsActions