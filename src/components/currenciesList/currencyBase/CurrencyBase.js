import Input from "../../input/Input";

const CurrencyBase = ({
  onBaseChange,
  baseCurrency,
  currencyData,
  baseCurrencyUserValue,
}) => {
  return (
    <Input
      onChange={onBaseChange}
      id={baseCurrency}
      name={currencyData[0]}
      value={baseCurrencyUserValue}
    />
  );
};

export default CurrencyBase;
