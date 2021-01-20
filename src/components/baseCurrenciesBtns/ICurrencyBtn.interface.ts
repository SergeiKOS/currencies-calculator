export default interface ICurrency {
  currency: string;
  onBtnDisable(title: string): void;
  isDisabled: boolean;
}