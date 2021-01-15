import { useState } from "react";
import { useContext } from "react";
import BaseCurrenciesContext from "../../context/BaseCurrenciesContext";
import styles from "./Card.module.css";
import Input from "../input/Input";

interface ICard {
  currencyData: {
    0: string;
    1: number;
  };
}

const Card: React.FC<ICard> = ({ currencyData }) => {
  const { baseCurrency } = useContext(BaseCurrenciesContext);
  const [baseCurrencyUserValue, setBaseCurrencyUserValue] = useState("1");
  const [targetCurrencyUserValue, setTargetCurrencyUserValue] = useState(
    currencyData[1].toFixed(4)
  );

  const currencyRate: any = currencyData[1].toFixed(4);

  const handleBaseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value }: any = e.target;
    setBaseCurrencyUserValue(value);
    setTargetCurrencyUserValue((value * currencyRate).toFixed(2));
  };

  const handleTargetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value }: any = e.target;
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
          value={baseCurrencyUserValue}
        />
        <Input
          onChange={handleTargetChange}
          id={`${currencyRate}`}
          currency={currencyData[0]}
          value={targetCurrencyUserValue}
        />
      </form>
      {<span className={styles.rate}>Rate: {currencyRate}</span>}
    </div>
  );
};

export default Card;
