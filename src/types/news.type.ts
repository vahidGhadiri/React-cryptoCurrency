export interface NewsInterface {
    _type: string
    name: string
    url: string
    image: {
        _type: string,
        thumbnail: {
            _type: string
            contentUrl: string
            width: number
            height: number
        },
        isLicensed: boolean
    },
    description: string
    provider: "Object"
    datePublished: string
}

export interface NewsStateInterface {
    news: Array<NewsInterface>
    isLoading: boolean
}

export interface NewsActionInterface {
    data?: any,
    type: string
}