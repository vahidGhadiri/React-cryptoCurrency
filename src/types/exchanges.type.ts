export interface ExchangeInterface {
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


export interface ExchangesStateInterface {
    exchanges: Array<ExchangeInterface>
    isLoading: boolean
}

export interface ExchangesActionInterface {
    data: any
    type: string
}

