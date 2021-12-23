import * as types from "./markets.constant"
import {MarketsType} from "../../types/markets.type";


class Actions {
    public getMarkets() {
        return {
            type: types.GET_MARKETS
        }
    }

    public setMarkets(markets: MarketsType) {
        return {
            type: types.SET_MARKETS,
            data: markets
        }
    }

    public setLoading(loading: boolean) {
        return {
            type: types.SET_LOADING,
            data: loading
        }
    }
}

const marketsActions = new Actions()

export default marketsActions