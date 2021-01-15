import { useContext, useState } from "react";
import BaseCurrenciesContext from "../../context/BaseCurrenciesContext";
import styles from "./BaseCurrenciesBtns.module.css";
import CurrencyBtn from "./CurrencyBtn";

const BaseCurrenciesBtns: React.FC = () => {
  const { allRates } = useContext(BaseCurrenciesContext);
  const [isDisabled, setIsDisabled] = useState({
    currency: "USD",
    disabled: false,
  });

  const handleBtnDisable = (currency: string) => {
    setIsDisabled({ currency, disabled: true });
  };

  return (
    <ul className={styles.baseCurrenciesList}>
      {allRates.map((currency: string) => (
        <li key={currency}>
          <CurrencyBtn
            currency={currency}
            onBtnDisable={handleBtnDisable}
            isDisabled={isDisabled.currency === currency}
          />
        </li>
      ))}
    </ul>
  );
};

export default BaseCurrenciesBtns;
