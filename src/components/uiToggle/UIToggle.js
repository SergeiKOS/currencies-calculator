import { BsGrid3X2, BsListTask } from "react-icons/bs";
import SvgIcon from "../SvgIcon";

const UIToggle = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "70px",
      }}
    >
      <div aria-label="Toggle currencies grid">
        <SvgIcon color="white" size="30px">
          <BsGrid3X2 />
        </SvgIcon>
      </div>
      <div aria-label="Toggle currencies list">
        <SvgIcon color="white" size="30px">
          <BsListTask />
        </SvgIcon>
      </div>
    </div>
  );
};

export default UIToggle;
