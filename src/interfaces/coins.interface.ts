export interface CoinInterface {
    "id": number
    "uuid": string
    "slug": string
    "symbol": string
    "name": string
    "description": string
    "color": string
    "iconType": string
    "iconUrl": string
    "websiteUrl": string
    "socials": Array<NameInterface>
    "links": Array<NameInterface>
    "confirmedSupply": true
    "numberOfMarkets": number
    "numberOfExchanges": number
    "type": string
    "volume": number
    "marketCap": number
    "price": string
    "circulatingSupply": number
    "totalSupply": number
    "approvedSupply": boolean
    "firstSeen": number
    "listedAt": number
    "change": number
    "rank": number
    "history": Array<string>
    "allTimeHigh": {
        price: string,
        timestamp: string
    }
    "penalty": boolean
}

export interface CoinsInitialStateInterface {
    coins: Array<CoinInterface>
    coin: {} | CoinInterface
    isLoading: boolean
    error: string
}

interface NameInterface {
    "name": string
    "type": string
    "url": string
}

export interface CoinsActionInterface {
    type: string
    data: any
}
