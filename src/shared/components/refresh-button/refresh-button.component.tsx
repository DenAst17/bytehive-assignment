import ChevronRight from "../../../assets/icons/refresh.svg";
import "./refresh-button.component.css";

type OwnProps = {
  onClick: () => void;
};

const RefreshButton: React.FC<OwnProps> = ({ onClick }) => {
  return (
    <button className="refreshButtonContainer" onClick={onClick}>
      <img src={ChevronRight} />
      <div className="refreshText">Sync Data</div>
    </button>
  );
};

export default RefreshButton;
