export default interface ICurrencyBaseForList {
  onBaseChange(e: React.ChangeEvent<HTMLInputElement>): void;
  baseCurrency: string;
  baseCurrencyUserValue: string;
}
