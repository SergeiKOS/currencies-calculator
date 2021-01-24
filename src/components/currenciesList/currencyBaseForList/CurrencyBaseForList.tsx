import Input from "../../input/Input";
import ICurrencyBaseForList from "./ICurrencyBaseForList.interface";

const CurrencyBaseForList = ({
  onBaseChange,
  baseCurrency,
  baseCurrencyUserValue,
}: ICurrencyBaseForList) => {
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
