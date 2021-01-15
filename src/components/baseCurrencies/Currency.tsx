import { useContext } from "react";
import BaseCurrenciesContext from "../../context/BaseCurrenciesContext";
import styles from "./Currency.module.css";

interface ICurrency {
  currency: string;
  onBtnDisable(title: string): void;
  isDisabled: boolean;
}

const Currency: React.FC<ICurrency> = ({
  currency,
  onBtnDisable,
  isDisabled,
}) => {
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

export default Currency;
