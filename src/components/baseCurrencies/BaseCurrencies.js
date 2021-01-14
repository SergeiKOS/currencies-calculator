import { useContext, useState } from "react";
import BaseCurrenciesContext from "../../context/BaseCurrenciesContext";
import styles from "./BaseCurrencies.module.css";
import Currency from "./Currency";

const BaseCurrencies = () => {
  const { allRates } = useContext(BaseCurrenciesContext);
  const [isDisabled, setIsDisabled] = useState({
    currency: "USD",
    disabled: false,
  });

  const handleBtnDisable = (currency) => {
    setIsDisabled({ currency, disabled: true });
  };

  return (
    <ul className={styles.baseCurrenciesList}>
      {allRates.map((currency) => (
        <li key={currency}>
          <Currency
            currency={currency}
            onBtnDisable={handleBtnDisable}
            isDisabled={isDisabled.currency === currency}
          />
        </li>
      ))}
    </ul>
  );
};

export default BaseCurrencies;
