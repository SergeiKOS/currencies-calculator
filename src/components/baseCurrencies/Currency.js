import { useContext } from "react";
import BaseCurrenciesContext from "../../context/BaseCurrenciesContext";
import styles from "./Currency.module.css";

const Currency = ({ currency, onBtnDisable, isDisabled }) => {
  const { setBaseCurrency } = useContext(BaseCurrenciesContext);

  const handleClick = (e) => {
    const { innerText } = e.target;
    setBaseCurrency(innerText);
    onBtnDisable(innerText);
  };

  return (
    <button
      onClick={handleClick}
      className={styles.btn}
      disabled={isDisabled}
      type="button"
    >
      {currency}
    </button>
  );
};

export default Currency;
