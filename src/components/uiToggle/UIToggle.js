import { useContext } from "react";
import BaseCurrenciesContext from "../../context/BaseCurrenciesContext";
import { BsGrid3X2, BsListTask } from "react-icons/bs";
import SvgIcon from "../SvgIcon";

const UIToggle = () => {
  const { UI, setUI } = useContext(BaseCurrenciesContext);

  const toggleUI = () => {
    if (UI === "grid") {
      setUI("list");
    } else if (UI === "list") {
      setUI("grid");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "70px",
      }}
    >
      <button
        onClick={toggleUI}
        aria-label="Toggle currencies grid"
        type="button"
      >
        <SvgIcon color="white" size="30px">
          <BsGrid3X2 />
        </SvgIcon>
      </button>
      <button
        onClick={toggleUI}
        aria-label="Toggle currencies list"
        type="button"
      >
        <SvgIcon color="white" size="30px">
          <BsListTask />
        </SvgIcon>
      </button>
    </div>
  );
};

export default UIToggle;
