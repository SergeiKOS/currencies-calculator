import { useState, useEffect } from "react";
import styles from "./Cards.module.css";
import Card from "./Card";
import { fetchRates } from "../../api";

const Cards = () => {
  const [currencyRates, setCurrencyRates] = useState([]);
  const [baseCurrency, setBaseCurrency] = useState("USD");

  useEffect(() => {
    const fetchAPI = async () => {
      let {
        data: { rates },
      } = await fetchRates(baseCurrency);

      rates = Object.entries(rates);
      rates = rates.map((rate) => ({ ...rate }));

      setCurrencyRates(rates);
    };
    fetchAPI();
  }, []);

  return (
    <div className={styles.cards}>
      {currencyRates.map((rate) => (
        <Card currencyRates={rate} baseCurrency={baseCurrency} />
      ))}
    </div>
  );
};

export default Cards;
