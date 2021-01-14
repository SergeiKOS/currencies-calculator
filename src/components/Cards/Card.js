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
  const [targetCurrencyUserValue, setTargetCurrencyUserValue] = useState(
    currencyData[1].toFixed(4)
  );

  const currencyRate = currencyData[1].toFixed(4);

  const handleBaseChange = (e) => {
    const { value } = e.target;
    setBaseCurrencyUserValue(value);
    setTargetCurrencyUserValue((value * currencyRate).toFixed(2));
  };

  const handleTargetChange = (e) => {
    const { value } = e.target;
    setTargetCurrencyUserValue(value);
    setBaseCurrencyUserValue((value / currencyRate).toFixed(2));
  };

  return (
    <div className={styles.card}>
      <div className={styles.currencyHeader}>
        {baseCurrency}/{currencyData[0]}
      </div>
      <form autoComplete="off">
        <Input
          onChange={handleBaseChange}
          id={`${baseCurrency}${currencyRate}`}
          currency={baseCurrency}
          name={currencyData[0]}
          value={baseCurrencyUserValue}
        />
        <Input
          onChange={handleTargetChange}
          id={`${currencyRate}`}
          currency={currencyData[0]}
          name={baseCurrency}
          value={targetCurrencyUserValue}
        />
      </form>
      {<span>Rate: {currencyRate}</span>}
    </div>
  );
};

export default Card;
