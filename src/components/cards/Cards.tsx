import { useContext, memo } from "react";
import BaseCurrenciesContext from "../../context/BaseCurrenciesContext";
import styles from "./Cards.module.css";
import Card from "./Card";

const Cards = memo(() => {
  const { currencyData } = useContext(BaseCurrenciesContext);

  return (
    <div className={styles.cards}>
      {currencyData.map((currencyData: { 0: string; 1: number }) => (
        <Card currencyData={currencyData} key={currencyData[0]} />
      ))}
    </div>
  );
});

export default Cards;
