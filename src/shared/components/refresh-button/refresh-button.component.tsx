import ChevronRight from "../../../assets/icons/refresh.svg";
import "./refresh-button.component.css";

const RefreshButton = () => {
  return (
    <button className="refreshButtonContainer">
      <img src={ChevronRight} />
      <div className="refreshText">Sync Data</div>
    </button>
  );
};

export default RefreshButton;
