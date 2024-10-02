import React from "react";
import { Divider } from "@mui/material";

import { GetApiProducts200Item } from "../../../models";
import "./products-menu.component.css";

type OwnProps = {
  product: GetApiProducts200Item;
};

const TopProductsMenuItem: React.FC<OwnProps> = ({ product }) => {
  return (
    <>
      <div className="topProductGridContainer">
        <div className="topProductBlock1">
          <img
            className="avatarImage"
            src={product.imageUrl}
            alt={product.title}
          />
          <div className="topProductTitleCategory">
            <div className="topProductTitle">{product.title}</div>
            <div className="topProductSubtitle">{`in ${product.category}`}</div>
          </div>
        </div>
        <div className="topProductBlock2">
          <div className="topProductPurchasesQuantity">
            {product.purchasesQuantity}
          </div>
          <div className="topProductSubtitle">in sales</div>
        </div>
        <div className="topProductBlock3">
          <div className="leaderboardPosition">
            {`#${product.leaderboardPosition}`}
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
};

export default TopProductsMenuItem;
