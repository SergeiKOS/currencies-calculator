interface ICurrencyItem {
  currency: any;
  baseCurrencyUserValue: any;
}

const CurrencyItem: React.FC<ICurrencyItem> = ({
  currency,
  baseCurrencyUserValue,
}) => {
  const currencyRate = currency[1].toFixed(4);

  return (
    <>
      <td>{currency[0]}</td>
      <td>{(baseCurrencyUserValue * currencyRate).toFixed(2)}</td>
      <td>{currencyRate}</td>
    </>
  );
};

export default CurrencyItem;
