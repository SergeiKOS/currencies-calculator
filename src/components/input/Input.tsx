import styles from "./Input.module.css";
import IInput from "./IInput.interface";

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
