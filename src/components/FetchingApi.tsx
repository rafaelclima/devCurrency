import { useFetchData } from "../assets/hooks/useFetchData";
import { useNavigate } from "react-router-dom";

export const FetchingApi = () => {
  const { data, isLoading } = useFetchData();
  const navigate = useNavigate();

  const formatCurrency = (value: string): string => {
    const numberValue = parseFloat(value);
    return numberValue.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const handleMoedaClick = (coinSymbol: string) => {
    navigate(`/moeda/${coinSymbol}`);
  };

  return (
    <>
      {isLoading && (
        <h2 className=" mb-4 mt-4 text-xl font-medium ">
          Carregando informações...
        </h2>
      )}
      {!isLoading && (
        <table className="w-full mt-4 border-separate border-spacing-y-3.5 overflow-hidden">
          <thead>
            <tr>
              <th className="py-2 text-center bg-transparent">MOEDA</th>
              <th className="py-2 text-center bg-transparent">
                VALOR DE MERCADO
              </th>
              <th className="py-2 text-center bg-transparent">PREÇO</th>
              <th className="py-2 text-center bg-transparent">VOLUME</th>
            </tr>
          </thead>
          <tbody className=" divide-none text-center ">
            {!isLoading &&
              data?.coins.slice(0, 20).map((moeda) => (
                <tr
                  className=" bg-zinc-900 rounded-lg cursor-pointer transform transition-transform hover:scale-105 "
                  key={moeda.name}
                >
                  <td
                    className="py-3 border border-zinc-900 rounded-tl-lg rounded-bl-lg"
                    onClick={() => handleMoedaClick(moeda.symbol)}
                  >
                    <span className=" font-bold ">
                      {moeda.name} | {moeda.symbol}
                    </span>
                  </td>
                  <td className="py-3">{formatCurrency(moeda.market_cap)}</td>
                  <td className="py-3">{formatCurrency(moeda.price)}</td>
                  <td className="py-3 border border-zinc-900  rounded-tr-lg rounded-br-lg">
                    {moeda.delta_24h.includes("-") ? (
                      <span className="text-red-600">{moeda.delta_24h}</span>
                    ) : (
                      <span className="text-green-600">{moeda.delta_24h}</span>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </>
  );
};
