import React from "react";
import ChevronRight from "../../assets/icons/chevron-right.svg";
import "./navbar.component.css";

type OwnProps = {
  text: string;
  iconSrc: string;
  isSelected?: boolean;
  hasChevron?: boolean;
};

const MenuButton: React.FC<OwnProps> = ({
  text,
  iconSrc,
  isSelected = false,
  hasChevron = false,
}) => {
  return (
    <div className={`menuButtonContainer ${isSelected ? "selected" : ""}`}>
      <div className="menuIconContainer">
        <div className={`logoIcon ${isSelected ? "selectedIcon" : ""}`}>
          <img className="menuIcon" src={iconSrc} />
        </div>
        <div className={`buttonText ${isSelected ? "selectedText" : ""}`}>
          {text}
        </div>
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
