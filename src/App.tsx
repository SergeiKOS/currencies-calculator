import { useState } from "react";
import BaseCurrenciesContext from "./context/BaseCurrenciesContext";
import UIToggle from "./components/uiToggle/UIToggle";
import Cards from "./components/cards/Cards.js";
import BaseCurrencies from "./components/baseCurrencies/BaseCurrencies";
import styles from "./App.module.css";

const App: React.FC = () => {
  const [baseCurrency, setBaseCurrency] = useState("USD");

  const allRates = ["AUD", "CAD", "EUR", "GBP", "JPY", "RUB", "USD"];

  return (
    <BaseCurrenciesContext.Provider
      value={{ allRates, baseCurrency, setBaseCurrency }}
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
      <div className={styles.container}>
        <Cards />
      </div>
    </BaseCurrenciesContext.Provider>
  );
};

export default App;
