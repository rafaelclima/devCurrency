export interface coinCrypto {
  symbol: string
  show_symbol: string
  name: string
  rank: number
  price: string
  market_cap: string
  total_volume_24h: string
  low_24h: string
  high_24h: string
  delta_1h: string
  delta_24h: string
  delta_7d: string
  delta_30d: string
  markets: Market[]
  last_updated_timestamp: number
  remaining: number
}

export interface Market {
  symbol: string
  volume_24h: string
  price: string
  exchanges: Exchange[]
}

export interface Exchange {
  name: string
  volume_24h: string
  price: string
}