import { useContext } from "react";
import BaseCurrenciesContext from "../../context/BaseCurrenciesContext";
import CurrencyItem from "./currencyItem/CurrencyItem";

const CurrenciesList = () => {
  const { allRates } = useContext(BaseCurrenciesContext);
  return (
    <ul>
      {allRates.map((currency) => (
        <CurrencyItem currency={currency} key={currency} />
      ))}
    </ul>
  );
};

export default CurrenciesList;
