import { useState, useEffect } from "react";
import BaseCurrenciesContext from "./context/BaseCurrenciesContext";
import { fetchRates } from "./api";
import UIToggle from "./components/uiToggle/UIToggle";
import Cards from "./components/cards/Cards";
import CurrenciesList from "./components/currenciesList/CurrenciesList";
import BaseCurrencies from "./components/baseCurrencies/BaseCurrencies";
import styles from "./App.module.css";

const App = () => {
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const allRates = ["AUD", "CAD", "EUR", "GBP", "JPY", "RUB", "USD"];
  const [UI, setUI] = useState("grid");
  const [currencyRates, setCurrencyRates] = useState([]);

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

  const getUI = () => {
    if (UI === "grid") {
      return <Cards />;
    } else if (UI === "list") {
      return <CurrenciesList />;
    }
  };

  return (
    <BaseCurrenciesContext.Provider
      value={{
        baseCurrency,
        setBaseCurrency,
        allRates,
        currencyRates,
        setCurrencyRates,
        UI,
        setUI,
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className={styles.container}
      >
        <BaseCurrencies />
        <UIToggle />
      </header>
      <div className={styles.container}>{getUI()}</div>
    </BaseCurrenciesContext.Provider>
  );
};

export default App;
