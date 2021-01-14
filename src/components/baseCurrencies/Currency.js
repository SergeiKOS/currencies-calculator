import { useContext } from "react";
import BaseCurrenciesContext from "../../context/BaseCurrenciesContext";
import styles from "./Currency.module.css";

const Currency = ({ currency }) => {
  const { setBaseCurrency } = useContext(BaseCurrenciesContext);

  return (
    <button
      onClick={(e) => setBaseCurrency(e.target.innerText)}
      className={styles.btn}
      type="button"
    >
      {currency}
    </button>
  );
};

export default Currency;
