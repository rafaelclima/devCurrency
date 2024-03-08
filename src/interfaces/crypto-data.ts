export interface CryptoData {
  coins: Coin[]
  last_updated_timestamp: number
  remaining: number
}

export interface Coin {
  symbol: string
  show_symbol?: string
  name: string
  rank: number
  price: string
  market_cap: string
  volume_24h: string
  delta_24h: string
}