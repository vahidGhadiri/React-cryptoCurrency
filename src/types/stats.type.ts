export interface StatInterface {
    "totalCoins": number
    "totalMarkets": number
    "totalExchanges": number
    "totalMarketCap": number
    "total24hVolume": number
}

export interface StatsStateInterface {
    stats: StatInterface | {},
    isLoading: boolean
}

export interface StatsActionInterface {
    type: string,
    data: any
}