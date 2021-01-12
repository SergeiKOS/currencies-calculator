import { useContext } from "react";
import BaseCurrenciesContext from "../../context/BaseCurrenciesContext";

const Currency = ({ currency }) => {
  const { setBaseCurrency } = useContext(BaseCurrenciesContext);

  return (
    <button onClick={(e) => setBaseCurrency(e.target.innerText)} type="button">
      {currency}
    </button>
  );
};

export default Currency;
