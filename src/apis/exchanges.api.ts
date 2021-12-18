import axios from "axios";
import * as urls from "../configs/urls"

const http = axios.create({
    baseURL: "https://coinranking1.p.rapidapi.com",
    headers: {
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': '69a238c52cmshd0000458a91563ep1cb71cjsn5b681975faa3'
    }
})

export const getExchanges = async (): Promise<any> => http.get(urls.GET_EXCHANGES)

export const getMarkets = async (): Promise<any> => http.get(urls.GET_MARKETS)