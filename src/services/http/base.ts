import axios, {AxiosError, AxiosInstance} from "axios";
import {toast} from "react-toastify";


const newsOpt = {
    baseURL: 'https://bing-news-search1.p.rapidapi.com',
    headers: {
        'x-bingapis-sdk': 'true',
        'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
        'x-rapidapi-key': '69a238c52cmshd0000458a91563ep1cb71cjsn5b681975faa3'
    }
};

const currencyOpt = {
    baseURL: `https://api.coinranking.com/v2/`,
    headers: {
        "x-access-token": "coinranking05e5321829b78c0f9c2aae1e44b2b897c5d46c41d28d1211",
    }
}

abstract class BaseApi {
    protected httpServices: AxiosInstance

    protected constructor(version: string = "currency") {
        this.httpServices = axios.create({
            timeout: 10000,
            baseURL: version === "news" ? newsOpt.baseURL : currencyOpt.baseURL,
            headers: version === "news" ? newsOpt.headers : currencyOpt.headers
        })

        this.requestInterceptors()
        this.responseInterceptors()
    }


    private requestInterceptors = () => {
        this.httpServices.interceptors.request.use(
            (request) => request,
            (error: AxiosError) => error
        )
    }

    private responseInterceptors = () => {
        this.httpServices.interceptors.response.use(
            (response) => response,
            (error) => {
                toast.warn(error.message, {position: toast.POSITION.BOTTOM_LEFT})
            })
    }
}

export default BaseApi