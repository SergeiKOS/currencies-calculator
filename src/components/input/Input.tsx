import styles from "./Input.module.css";

interface IInput {
  value: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  id: string;
  currency: string;
}

const Input: React.FC<IInput> = ({ value, onChange, id, currency }) => {
  return (
    <>
      <p className={styles.inputWrapper}>
        <label className={styles.label} htmlFor={id}>
          {currency.toUpperCase()}:
        </label>
        <input
          className={styles.input}
          type="number"
          id={id}
          value={value}
          onChange={onChange}
        />
      </p>
    </>
  );
};

export default Input;
