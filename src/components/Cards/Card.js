import { useState } from "react";
import styles from "./Card.module.css";
import Input from "./Input";

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
const Card = ({ currencyRates, baseCurrency }) => {
  const [baseCurrencyUserValue, setBaseCurrencyUserValue] = useState(1);
  // const [targetCurrencyUserValue, setTargetCurrencyUserValue] = useState(
  //   baseCurrencyUserValue * currencyRates[1]
  // );

  // const handleAmountChange = (e) => {
  //   let { value, id } = e.target;
  //   if (value !== "") {
  //     value = parseFloat(value, 10);
  //     if (isNaN(value)) {
  //       return null;
  //     }
  //   }
  // };

  const handleBaseChange = (e) => {
    setBaseCurrencyUserValue(e.target.value);
  };

  const handleTargetChange = (e) => {
    setBaseCurrencyUserValue((e.target.value / currencyRates[1]).toFixed(2));
    // setBaseCurrencyUserValue(e.target.value * baseCurrencyUserValue);
  };

  return (
    <div className={styles.card}>
      <div className={styles.currencyHeader}>
        {baseCurrency}/{currencyRates[0]}
      </div>
      <form autoComplete="off">
        <Input
          onChange={handleBaseChange}
          id={baseCurrency}
          name={currencyRates[0]}
          value={baseCurrencyUserValue}
          rate={1}
        />
        <Input
          onChange={handleTargetChange}
          id={currencyRates[0]}
          name={baseCurrency}
          value={(currencyRates[1] * baseCurrencyUserValue).toFixed(2)}
          rate={currencyRates[1].toFixed(2)}
        />
      </form>
    </div>
  );
};

export default Card;
