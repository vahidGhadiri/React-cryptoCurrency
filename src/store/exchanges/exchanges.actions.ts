import * as types from "./exchanges.constant"
import {ExchangesInterface} from "../../interfaces/exchanges.interface";
import {AxiosError} from "axios";


class Actions {
    public getExchanges() {
        return {
            type: types.GET_EXCHANGES,
        }
    }

    public setExchanges(exchanges: ExchangesInterface) {
        return {
            type: types.GET_EXCHANGES_SUCCESSFUL,
            data: exchanges
        }
    }

    public setErr(err: AxiosError) {
        return {
            type: types.GET_EXCHANGES_FAILURE,
            data: err
        }
    }
}

const exchangesActions = new Actions()

export default exchangesActions