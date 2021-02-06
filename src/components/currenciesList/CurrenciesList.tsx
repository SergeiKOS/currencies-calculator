import { useContext, useState } from "react";
import BaseCurrenciesContext from "../../context/BaseCurrenciesContext";
import CurrencyBaseForList from "./currencyBaseForList/CurrencyBaseForList";
import CurrencyItem from "./currencyItem/CurrencyItem";
// @ts-ignore
import styles from "./CurrenciesList.module.css";

const CurrenciesList = () => {
  const { baseCurrency, currencyData } = useContext(BaseCurrenciesContext);
  const [baseCurrencyUserValue, setBaseCurrencyUserValue] = useState("1");

  const handleBaseChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const input = e.target as HTMLInputElement;
    setBaseCurrencyUserValue(input.value);
  };

  return (
    <div className={styles.currenciesListWrapper}>
      <CurrencyBaseForList
        onBaseChange={handleBaseChange}
        baseCurrency={baseCurrency}
        baseCurrencyUserValue={baseCurrencyUserValue}
      />
      <table>
        <tbody>
          <tr>
            <th>Base</th>
            <th>Sum</th>
            <th>Rate</th>
          </tr>
          {currencyData.map((currency: { 0: string; 1: string }) => (
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
