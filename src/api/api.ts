import {http} from "../configs/http";
import * as urls from "../configs/urls";


export const getExchanges = async (): Promise<any> => http.get(urls.GET_EXCHANGES)
export const getMarkets = async (): Promise<any> => http.get(urls.GET_MARKETS)