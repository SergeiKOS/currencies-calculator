import Cards from "./components/Cards/Cards";
import styles from "./App.module.css";

const App:React.FC = () => {
  return (
    <div className={styles.container}>
      <Cards />
    </div>
  );
}

export default App;