import { useCoinData } from "../assets/hooks/useFetchData";

interface CoinCardProps {
  coin: string;
}

export default function CoinCard({ coin }: CoinCardProps) {
  const { data, isLoading, isError } = useCoinData(coin);

  const formatCurrency = (value: string | undefined): string => {
    if (value === undefined) return "";
    const numberValue = parseFloat(value);
    return numberValue.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <div>
      {isLoading ? (
        <p className=" w-full text-center text-xl font-medium mt-3">
          Carregando dados...
        </p>
      ) : isError ? (
        <p className=" w-3/4 text-center text-xl font-medium mt-3">
          Erro!! Verifique se você digitou o simbolo da moeda corretamente e
          tente novamente.
        </p>
      ) : (
        <div className="flex flex-col items-center gap-6 mt-6">
          <h1 className="text-center text-2xl font-bold">{data?.data.name}</h1>
          <p className="uppercase text-base">{data?.data.symbol}</p>
          <div className="flex flex-col gap-2 p-4 rounded bg-zinc-950">
            <p>
              <span className="text-base font-semibold">Preço: </span>
              {formatCurrency(data?.data.price)}
            </p>
            <p>
              <span className="text-base font-semibold">Maior preço 24h: </span>
              {formatCurrency(data?.data.high_24h)}
            </p>
            <p>
              <span className="text-base font-semibold">Menor preço 24h: </span>
              {formatCurrency(data?.data.low_24h)}
            </p>
            <p>
              <span className="text-base font-semibold">Delta 24h: </span>
              {data?.data.delta_24h !== undefined ? (
                <span
                  className={
                    data?.data.delta_24h < "0"
                      ? "text-red-600"
                      : "text-green-600"
                  }
                >
                  {data?.data.delta_24h}
                </span>
              ) : (
                <span>-</span>
              )}
            </p>
            <p>
              <span className="text-base font-semibold">Valor mercado: </span>
              {formatCurrency(data?.data.market_cap)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
