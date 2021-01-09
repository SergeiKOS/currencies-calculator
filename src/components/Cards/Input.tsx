import styles from "./Card.module.css";

interface 

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
