import * as urls from "../configs/urls"
import {http} from "../configs/http";


export const getExchanges = async (): Promise<any> => http.get(urls.GET_EXCHANGES)

