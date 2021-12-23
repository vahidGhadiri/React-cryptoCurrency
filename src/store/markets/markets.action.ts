import * as types from "./markets.constant"
import {MarketsInterface} from "../../interfaces/markets.interface";
import {AxiosError} from "axios";

class Actions {

    public getMarkets() {
        return {
            type: types.GET_MARKETS
        }
    }

    public setMarkets(markets: MarketsInterface) {
        return {
            type: types.GET_MARKETS_SUCCESSFUL,
            data: markets
        }
    }

    public setErr(err: AxiosError) {
        return {
            type: types.GET_MARKETS_FAILURE,
            data: err
        }
    }
}

const marketsActions = new Actions()

export default marketsActions