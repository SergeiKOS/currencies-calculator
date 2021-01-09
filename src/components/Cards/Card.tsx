import styles from "./Card.module.css";
import Input from "./Input";

interface ICard {
  onAmountChange(e: React.ChangeEvent<HTMLInputElement>): void;
  USDCAD: {
    USD: string;
    CAD: string;
    rates: {
      USD: string;
      CAD: string;
    };
  };
}

const Card: React.FC<ICard> = ({
  USDCAD: { USD, CAD, rates },
  onAmountChange,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.currencyHeader}>USD/CAD</div>
      <form autoComplete="off">
        <Input
          onAmountChange={onAmountChange}
          id="usd"
          name="cad"
          value={USD}
          rate={rates.USD}
        />
        <Input
          onAmountChange={onAmountChange}
          id="cad"
          name="usd"
          value={CAD}
          rate={rates.CAD}
        />
      </form>
    </div>
  );
};

export default Card;
