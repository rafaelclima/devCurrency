import { Link, useParams } from "react-router-dom";
import CoinCard from "../components/CoinCard";
import { ArrowLeft } from "lucide-react";

interface Params {
  [key: string]: string;
}

const BackToHomeButton = () => {
  return (
    <div className="mt-3 text-center">
      <Link
        to="/"
        className="inline-flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        <ArrowLeft className="w-6 h-6 mr-2" />{" "}
        {/* Ícone de seta para a esquerda */}
        Voltar para Home
      </Link>
    </div>
  );
};

export const CoinDetails = () => {
  const { coinSymbol } = useParams<Params>();

  if (coinSymbol === undefined) {
    return <div>Moeda não encontrada</div>;
  }

  return (
    <>
      <CoinCard coin={coinSymbol} />
      <BackToHomeButton />
    </>
  );
};
