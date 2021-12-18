export interface MarketsInterface {
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

export interface MarketsInitialStateInterface {
    markets: Array<MarketsInterface>
    isLoading: boolean
    error: string
}


export interface MarketsActionInterface {
    data: any
    type: string
}

