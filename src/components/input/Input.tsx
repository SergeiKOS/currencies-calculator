import styles from "./Input.module.css";

interface IInput {
  value: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  id: string;
  currency: string;
  name: string;
  rate?: string;
}

const Input: React.FC<IInput> = ({
  value,
  onChange,
  id,
  currency,
  name,
  rate,
}) => {
  return (
    <>
      <p
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <label className={styles.label} htmlFor={id}>
          {currency.toUpperCase()}:
        </label>
        <input
          className={styles.input}
          type="number"
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        />
      </p>
      {rate && <span>Rate: {rate}</span>}
    </>
  );
};

export default Input;
