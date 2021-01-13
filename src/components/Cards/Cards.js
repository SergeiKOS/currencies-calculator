import { useContext } from "react";
import BaseCurrenciesContext from "../../context/BaseCurrenciesContext";
import styles from "./Cards.module.css";
import Card from "./Card";

const Cards = () => {
  const { currencyRates } = useContext(BaseCurrenciesContext);

  return (
    <div className={styles.cards}>
      {currencyRates.map((rate) => (
        <Card currencyRates={rate} key={rate[0]} />
      ))}
    </div>
  );
};

export default Cards;
