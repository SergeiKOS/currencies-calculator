const CurrencyItem = ({ currency, baseCurrencyUserValue }) => {
  const currencyRate = currency[1].toFixed(4);
  return (
    <>
      <span>{currency[0]}:</span>
      <span>{(baseCurrencyUserValue * currencyRate).toFixed(2)}</span>
      <span>Rate: {currencyRate}</span>
    </>
  );
};

export default CurrencyItem;
