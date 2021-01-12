import { useState } from "react";
import BaseCurrenciesContext from "./context/BaseCurrenciesContext";
import Cards from "./components/Cards/Cards.js";
import BaseCurrencies from "./components/baseCurrencies/BaseCurrencies";
import styles from "./App.module.css";

const App: React.FC = () => {
  const [baseCurrency, setBaseCurrency] = useState("USD");

  const allRates = ["AUD", "CAD", "EUR", "GBP", "JPY", "RUB", "USD"];

  return (
    <BaseCurrenciesContext.Provider
      value={{ allRates, baseCurrency, setBaseCurrency }}
    >
      <header>
        <BaseCurrencies />
      </header>
      <div className={styles.container}>
        <Cards />
      </div>
    </BaseCurrenciesContext.Provider>
  );
};

export default App;
