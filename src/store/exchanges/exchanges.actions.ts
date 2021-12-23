import * as types from "./exchanges.constant"
import {ExchangesInterface} from "../../types/exchanges.type";


class Actions {
    public getExchanges() {
        return {
            type: types.GET_EXCHANGES,
        }
    }
    public setExchanges(exchanges: ExchangesInterface) {
        return {
            type: types.SET_EXCHANGES,
            data: exchanges
        }
    }

    public setLoading(loading: boolean) {
        return {
            type: types.SET_LOADING,
            data: loading
        }
    }
}

const exchangesActions = new Actions()

export default exchangesActions