import axios, {AxiosInstance} from "axios";
import {toast} from "react-toastify";


abstract class BaseApi {
    protected httpServices: AxiosInstance

    protected constructor() {
        this.httpServices = axios.create({
            baseURL: "https://coinranking1.p.rapidapi.com",
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
            (error) => console.log(error)
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