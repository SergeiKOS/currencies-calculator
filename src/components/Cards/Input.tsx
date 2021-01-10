import styles from "./Card.module.css";

interface IInput {
  value: string;
  onAmountChange(e: React.ChangeEvent<HTMLInputElement>): void;
  id: string;
  name: string;
  rate: string
}

const Input:React.FC<IInput> = ({ value, onAmountChange, id, name, rate }) => {
  return (
    <p>
      <label htmlFor={id} className={styles.label}>
        {id.toUpperCase()}:
      </label>
      <input
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={onAmountChange}
      />
      <span>Rate: {rate}</span>
    </p>
  );
}

export default Input;
