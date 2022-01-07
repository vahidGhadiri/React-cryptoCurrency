import axios, {AxiosError, AxiosInstance} from "axios";
import {toast} from "react-toastify";


abstract class BaseApi {
    protected httpServices: AxiosInstance

    protected constructor(suffix?: string) {
        this.httpServices = axios.create({
            timeout: 10000,
            baseURL: 'https://api.coinranking.com/v2',
            headers: {
                "x-access-token": "coinranking05e5321829b78c0f9c2aae1e44b2b897c5d46c41d28d1211",
            }
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