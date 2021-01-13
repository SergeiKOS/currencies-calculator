import styles from "./Input.module.css";

interface IInput {
  value: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  id: string;
  name: string;
  rate?: string;
}

const Input: React.FC<IInput> = ({ value, onChange, id, name, rate }) => {
  return (
    <p>
      <label className={styles.label} htmlFor={id}>
        {id.toUpperCase()}:
      </label>
      <input
        className={styles.input}
        type="number"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
      {rate && <span>Rate: {rate}</span>}
    </p>
  );
};

export default Input;
