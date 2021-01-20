import Input from "../../input/Input";
import ICurrencyBaseForList from "./ICurrencyBaseForList.interface";

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
