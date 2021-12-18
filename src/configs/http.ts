import axios from "axios";

export const http = axios.create({
    baseURL: "https://coinranking1.p.rapidapi.com",
    headers: {
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': '69a238c52cmshd0000458a91563ep1cb71cjsn5b681975faa3'
    },
    timeout: 10000
})

http.interceptors.request.use(
    (request) => {
        console.log("axios-request", request)
        return request
    },
    (error) => console.log(error)
)

http.interceptors.response.use(
    (response) => {
        console.log("axios-response", response)
        return response
    },
    (error) => console.log(error)
)