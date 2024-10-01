import React from "react";
import ChevronRight from "../../assets/icons/chevron-right.svg";
import "./navbar.component.css";

type OwnProps = {
  text: string;
  iconSrc: string;
  hasChevron?: boolean;
};

const MenuButton: React.FC<OwnProps> = ({
  text,
  iconSrc,
  hasChevron = false,
}) => {
  return (
    <div className="menuButtonContainer">
      <div className="menuIconContainer">
        <div className="logoIcon">
          <img src={iconSrc} />
        </div>
        <div className="buttonText">{text}</div>
      </div>
      {hasChevron && (
        <div className="logoIcon">
          <img src={ChevronRight} />
        </div>
      )}
    </div>
  );
};

export default MenuButton;
