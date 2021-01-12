import { useContext } from "react";
import BaseCurrenciesContext from "../../context/BaseCurrenciesContext";
import Currency from "./Currency";

const BaseCurrencies = () => {
  const { allRates } = useContext(BaseCurrenciesContext);
  return (
    <ul>
      {allRates.map((currency) => (
        <Currency currency={currency} key={currency} />
      ))}
    </ul>
  );
};

export default BaseCurrencies;
