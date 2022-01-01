import axios, {AxiosError, AxiosInstance} from "axios";
import {toast} from "react-toastify";


const {REACT_APP_CURRENCY_BASE_URL, REACT_APP_NEWS_BASE_URL} = process.env

abstract class BaseApi {
    protected httpServices: AxiosInstance

    protected constructor(suffix?: string) {
        this.httpServices = axios.create({
            baseURL: `https://coinranking1.p.rapidapi.com/${suffix ? suffix : ""}`,
            timeout: 10000,
            headers: {
                'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
                'x-rapidapi-key': '69a238c52cmshd0000458a91563ep1cb71cjsn5b681975faa3',
            },
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