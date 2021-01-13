import { useContext, useState } from "react";
import BaseCurrenciesContext from "../../context/BaseCurrenciesContext";
import CurrencyBase from "./currencyBase/CurrencyBase";
import CurrencyItem from "./currencyItem/CurrencyItem";

const CurrenciesList = () => {
  const { baseCurrency, currencyData } = useContext(BaseCurrenciesContext);
  const [baseCurrencyUserValue, setBaseCurrencyUserValue] = useState(1);
  console.log(currencyData);

  const handleBaseChange = (e) => {
    setBaseCurrencyUserValue(e.target.value);
    // setTargetCurrencyUserValue((e.target.value * currencyData[1]).toFixed(2));
  };

  return (
    <div>
      <CurrencyBase
        onBaseChange={handleBaseChange}
        baseCurrency={baseCurrency}
        currencyData={currencyData}
        baseCurrencyUserValue={baseCurrencyUserValue}
      />
      <ul>
        {currencyData.map((currency) => (
          <li key={currency}>
            <CurrencyItem
              currency={currency}
              baseCurrencyUserValue={baseCurrencyUserValue}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurrenciesList;
