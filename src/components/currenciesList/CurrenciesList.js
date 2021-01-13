import { useContext, useState } from "react";
import BaseCurrenciesContext from "../../context/BaseCurrenciesContext";
import CurrencyBase from "./currencyBase/CurrencyBase";
import CurrencyItem from "./currencyItem/CurrencyItem";
import styles from "./CurrenciesList.module.css";

const CurrenciesList = () => {
  const { baseCurrency, currencyData } = useContext(BaseCurrenciesContext);
  const [baseCurrencyUserValue, setBaseCurrencyUserValue] = useState(1);

  const handleBaseChange = (e) => {
    setBaseCurrencyUserValue(e.target.value);
    // setTargetCurrencyUserValue((e.target.value * currencyData[1]).toFixed(2));
  };

  return (
    <div className={styles.currenciesListWrapper}>
      <CurrencyBase
        onBaseChange={handleBaseChange}
        baseCurrency={baseCurrency}
        currencyData={currencyData}
        baseCurrencyUserValue={baseCurrencyUserValue}
      />
      <table>
        <tbody>
          <tr>
            <th>Base</th>
            <th>Sum</th>
            <th>Rate</th>
          </tr>
          {currencyData.map((currency) => (
            <tr className={styles.tr} key={currency[0]}>
              <CurrencyItem
                currency={currency}
                baseCurrencyUserValue={baseCurrencyUserValue}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurrenciesList;
