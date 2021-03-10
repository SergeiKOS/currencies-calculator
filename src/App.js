import { useState, useEffect } from "react";
import BaseCurrenciesContext from "./context/BaseCurrenciesContext";
import { fetchRates } from "./api";
import UIToggle from "./components/uiToggle/UIToggle";
import Cards from "./components/cards/Cards";
import CurrenciesList from "./components/currenciesList/CurrenciesList";
import BaseCurrenciesBtns from "./components/baseCurrenciesBtns/BaseCurrenciesBtns";
import styles from "./App.module.css";
import "./globalStyles/scaffolding.css";
import "./globalStyles/variables.css";
import { RiExchangeBoxLine } from "react-icons/ri";
import SvgIcon from "./components/SvgIcon";

const App = () => {
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const allRates = ["AUD", "CAD", "EUR", "GBP", "JPY", "RUB", "USD"];
  const [UI, setUI] = useState("grid");
  const [currencyData, setCurrencyData] = useState([]);

  useEffect(() => {
    fetchRates(baseCurrency).then(({ data: { rates } }) => {
      rates = Object.entries(rates).map((rate) => ({ ...rate }));
      return setCurrencyData(rates);
    });
  }, [baseCurrency]);

  const getUI = () => {
    if (UI === "grid") return <Cards />;
    else if (UI === "list") return <CurrenciesList />;
  };

  return (
    <BaseCurrenciesContext.Provider
      value={{
        baseCurrency,
        setBaseCurrency,
        allRates,
        currencyData,
        setCurrencyData,
        UI,
        setUI,
      }}
    >
      <header className={`container ${styles.header}`}>
        <SvgIcon color="#d3d3d3" size="48px">
          <RiExchangeBoxLine />
        </SvgIcon>
        <BaseCurrenciesBtns />
        <UIToggle />
      </header>
      <div className="container">{getUI()}</div>
    </BaseCurrenciesContext.Provider>
  );
};

export default App;
