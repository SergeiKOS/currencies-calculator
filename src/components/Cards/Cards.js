import { useState, useContext, useEffect } from "react";
import BaseCurrenciesContext from "../../context/BaseCurrenciesContext";
import styles from "./Cards.module.css";
import Card from "./Card";
import { fetchRates } from "../../api";

const Cards = () => {
  const [currencyRates, setCurrencyRates] = useState([]);
  const { baseCurrency } = useContext(BaseCurrenciesContext);

  useEffect(() => {
    const fetchAPI = async () => {
      let {
        data: { rates },
      } = await fetchRates(baseCurrency);

      rates = Object.entries(rates);
      rates = rates.map((rate) => ({ ...rate }));
      console.log(rates);
      setCurrencyRates(rates);
    };
    fetchAPI();
  }, [baseCurrency]);

  return (
    <div className={styles.cards}>
      {currencyRates.map((rate) => (
        <Card currencyRates={rate} baseCurrency={baseCurrency} key={rate[0]} />
      ))}
    </div>
  );
};

export default Cards;
