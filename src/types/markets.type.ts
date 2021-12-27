export interface MarketInterface {
    id: number
    uuid: string
    rank: number
    baseSymbol: string
    quoteSymbol: string
    sourceName: string
    sourceIconUrl: string
    tickerCreatedAt: number
    tickerClose: number
    tickerBaseVolume: number
    tickerQuoteVolume: number
    marketShare: number
    price: number
    volume: number
}

export interface MarketsStateInterface {
    markets: Array<MarketInterface>
    isLoading: boolean
}


export interface MarketsActionInterface {
    data: any
    type: string
}

