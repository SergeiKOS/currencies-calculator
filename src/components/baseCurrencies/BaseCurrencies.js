import { useContext } from "react";
import BaseCurrenciesContext from "../../context/BaseCurrenciesContext";
import styles from "./BaseCurrencies.module.css";
import Currency from "./Currency";

const BaseCurrencies = () => {
  const { allRates } = useContext(BaseCurrenciesContext);
  return (
    <ul className={styles.baseCurrenciesList}>
      {allRates.map((currency) => (
        <li key={currency}>
          <Currency currency={currency} />
        </li>
      ))}
    </ul>
  );
};

export default BaseCurrencies;
