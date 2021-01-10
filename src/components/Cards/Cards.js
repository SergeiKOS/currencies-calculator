import { useState, useEffect } from "react";
import styles from "./Cards.module.css";
import Card from "./Card";
import { fetchUSDCADRate } from "../../api";

const Cards = () => {
  const [USDCAD, setUSDCAD] = useState({
    USD: "1",
    CAD: "",
    rates: { CAD: "", USD: 1 },
  });

  useEffect(() => {
    const fetchAPI = async () => {
      let {
        data: {
          rates: { CAD },
        },
      } = await fetchUSDCADRate();

      CAD = CAD.toFixed(2);

      const USDCADCopy = { ...USDCAD };
      USDCADCopy.CAD = CAD;
      USDCADCopy.rates.CAD = CAD;

      setUSDCAD(USDCADCopy);
    };
    fetchAPI();
  }, []);

  const handleAmountChange = (e) => {
    let { value, id } = e.target;

    if (value !== "") {
      value = parseFloat(value, 10);
      if (isNaN(value)) {
        return null;
      }
    }
    const ID = id.toUpperCase();

    let USDCADCopy = { ...USDCAD };
    if (ID === "USD") {
      USDCADCopy.CAD = (value * USDCAD.rates.CAD).toFixed(2);
    } else if (ID === "CAD") {
      USDCADCopy.USD = (value / USDCAD.rates.CAD).toFixed(2);
    }

    setUSDCAD({ ...USDCADCopy, [ID]: +value });
  };

  return (
    <div className={styles.cards}>
      <Card USDCAD={USDCAD} onAmountChange={handleAmountChange} />
    </div>
  );
};

export default Cards;
