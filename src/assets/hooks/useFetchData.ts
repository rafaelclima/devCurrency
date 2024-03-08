import axios, { AxiosPromise } from "axios";
import { useQuery } from "react-query";
import { CryptoData } from "../../interfaces/crypto-data";
import { coinCrypto } from "../../interfaces/coinCrypto-data";

const fetchData = async (): AxiosPromise<CryptoData> => {
  const response = await axios.get<CryptoData>("https://coinlib.io/api/v1/coinlist?key=012f879c1a64c4be&pref=BRL&page=1&order=rank_asc")
  return response
}

const fetchCoinData = async (coinSymbol:string): AxiosPromise<coinCrypto> => {
  const response = await axios.get<coinCrypto>(`https://coinlib.io/api/v1/coin?key=012f879c1a64c4be&pref=BRL&symbol=${coinSymbol}`)
  return response
}

export const useFetchData = () => {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ["cryptoCurrency"]
  })

  return { 
    ...query, 
    data: query.data?.data
  }
};

export const useCoinData = (coinSymbol: string) => {
  const query = useQuery(["coinCurrency", coinSymbol], () => fetchCoinData(coinSymbol), {
    enabled: !!coinSymbol,
  });

  return {
    ...query,
    data: query.data,
  };
};