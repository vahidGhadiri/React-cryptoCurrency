export interface ExchangesInterface {
    id: number
    uuid: string
    name: string
    description: string
    iconUrl: string
    verified: boolean
    lastTickerCreatedAt: number
    numberOfMarkets: number
    volume: number
    websiteUrl: string
    rank: number
    marketShare: number
}


export interface ExchangesInitialStateInterface {
    exchanges: Array<ExchangesInterface>
    isLoading: boolean
    error: string
}

export interface ExchangesActionInterface {
    data: any
    type: string
}

