import { useState } from "react";
import { useContext } from "react";
import BaseCurrenciesContext from "../../context/BaseCurrenciesContext";
import styles from "./Card.module.css";
import Input from "../input/Input";

// interface ICard {
//   onAmountChange(e: React.ChangeEvent<HTMLInputElement>): void;
//   USDCAD: {
//     USD: string;
//     CAD: string;
//     rates: {
//       USD: string;
//       CAD: string;
//     };
//   };
// }

// : React.FC<ICard>
const Card = ({ currencyData }) => {
  const { baseCurrency } = useContext(BaseCurrenciesContext);
  const [baseCurrencyUserValue, setBaseCurrencyUserValue] = useState(1);
  const [targetCurrencyUserValue, setTargetCurrencyUserValue] = useState();

  const currencyRate = currencyData[1].toFixed(4);

  const handleBaseChange = (e) => {
    setBaseCurrencyUserValue(e.target.value);
    setTargetCurrencyUserValue(e.target.value * currencyRate);
  };

  const handleTargetChange = (e) => {
    setTargetCurrencyUserValue(e.target.value);
    setBaseCurrencyUserValue(e.target.value / currencyRate);
  };

  return (
    <div className={styles.card}>
      <div className={styles.currencyHeader}>
        {baseCurrency}/{currencyData[0]}
      </div>
      <form autoComplete="off">
        <Input
          onChange={handleBaseChange}
          id={baseCurrency}
          name={currencyData[0]}
          value={baseCurrencyUserValue}
        />
        <Input
          onChange={handleTargetChange}
          id={currencyData[0]}
          name={baseCurrency}
          value={targetCurrencyUserValue || currencyRate}
          rate={currencyRate}
        />
      </form>
    </div>
  );
};

export default Card;
