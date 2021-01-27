import { useContext, useState } from "react";
import BaseCurrenciesContext from "../../context/BaseCurrenciesContext";
// @ts-ignore
import styles from "./UIToggle.module.css";
import { BsGrid3X2, BsListTask } from "react-icons/bs";
import SvgIcon from "../SvgIcon";

const UIToggle = () => {
  const { UI, setUI } = useContext(BaseCurrenciesContext);
  const [isDisabled, setIsDisabled] = useState({
    grid: true,
    list: false,
  });

  const toggleUI = () => {
    if (UI === "grid") {
      setIsDisabled({
        grid: false,
        list: true,
      });
      setUI("list");
    } else if (UI === "list") {
      setIsDisabled({
        grid: true,
        list: false,
      });
      setUI("grid");
    }
  };

  return (
    <div className={styles.buttonWrapper}>
      <button
        onClick={toggleUI}
        className={styles.btn}
        aria-label="Toggle currencies grid"
        type="button"
        disabled={isDisabled.grid}
      >
        <SvgIcon color="white" size="30px">
          <BsGrid3X2 />
        </SvgIcon>
      </button>
      <button
        onClick={toggleUI}
        className={styles.btn}
        aria-label="Toggle currencies list"
        type="button"
        disabled={isDisabled.list}
      >
        <SvgIcon color="white" size="30px">
          <BsListTask />
        </SvgIcon>
      </button>
    </div>
  );
};

export default UIToggle;
