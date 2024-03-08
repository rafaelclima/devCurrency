import { Search } from "lucide-react";
import { FetchingApi } from "../components/FetchingApi";
import { useState } from "react";
import useDebounce from "../assets/hooks/useDebounce";
import CoinCard from "../components/CoinCard";

export const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const debouncedSearchValues = useDebounce(inputValue, 600);

  function handleChange(e: { target: { value: string } }) {
    const { value } = e.target;
    setInputValue(value);
  }

  return (
    <div className=" max-w-screen-lg mx-auto flex flex-col items-center ">
      <div className=" w-full flex items-center gap-3 ">
        <input
          className=" flex-1 bg-white text-black py-3 px-2 rounded-md "
          type="text"
          name="moeda"
          id="moeda"
          value={inputValue}
          placeholder="Digite o simbolo da moeda desejada Ex. btc, eth, doge..."
          onChange={handleChange}
        />
        <Search size={34} strokeWidth={2.5} />
      </div>
      {debouncedSearchValues === "" ? (
        <FetchingApi />
      ) : (
        <CoinCard coin={debouncedSearchValues} />
      )}
    </div>
  );
};
