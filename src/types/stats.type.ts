export interface StatsInterface {
    "totalCoins": number
    "totalMarkets": number
    "totalExchanges": number
    "totalMarketCap": number
    "total24hVolume": number
}

export interface StateInitialStateInterface {
    stats: StatsInterface | {},
    isLoading: boolean
}

export interface StatsActionInterface {
    type: string,
    data: any
}