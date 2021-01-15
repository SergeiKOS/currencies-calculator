import Input from "../../input/Input";

interface ICurrencyBaseForList {
  onBaseChange(e: React.ChangeEvent<HTMLInputElement>): void;
  baseCurrency: string;
  baseCurrencyUserValue: string;
}

const CurrencyBaseForList: React.FC<ICurrencyBaseForList> = ({
  onBaseChange,
  baseCurrency,
  baseCurrencyUserValue,
}) => {
  return (
    <Input
      onChange={onBaseChange}
      id={baseCurrency}
      value={baseCurrencyUserValue}
      currency={baseCurrency}
    />
  );
};

export default CurrencyBaseForList;
