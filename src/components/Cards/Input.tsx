import styles from "./Card.module.css";

interface IInput {
  value: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  id: string;
  name: string;
  rate: string;
}

const Input: React.FC<IInput> = ({ value, onChange, id, name, rate }) => {
  return (
    <p>
      <label htmlFor={id} className={styles.label}>
        {id.toUpperCase()}:
      </label>
      <input
        type="number"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
      <span>Rate: {rate}</span>
    </p>
  );
};

export default Input;
