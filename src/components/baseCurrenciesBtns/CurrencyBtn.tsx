import { useContext } from "react";
import ICurrencyBtn from "./ICurrencyBtn.interface";
import BaseCurrenciesContext from "../../context/BaseCurrenciesContext";
// @ts-ignore
import styles from "./CurrencyBtn.module.css";

const CurrencyBtn = ({ currency, onBtnDisable, isDisabled }: ICurrencyBtn) => {
  const { setBaseCurrency } = useContext(BaseCurrenciesContext);

  const handleClick = (e: React.MouseEvent<HTMLElement>): void => {
    const button = e.target as HTMLElement;
    const { innerText } = button;
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

export default CurrencyBtn;
