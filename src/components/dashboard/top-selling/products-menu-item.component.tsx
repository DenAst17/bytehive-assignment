import React from "react";
import "./products-menu-item.component.css";
import { GetApiProducts200Item } from "../../../models";
import { Divider } from "@mui/material";

type OwnProps = {
  product: GetApiProducts200Item;
};

const TopProductsMenuItem: React.FC<OwnProps> = ({ product }) => {
  return (
    <>
      <div className="topProductContainer">
        <img className="avatarImage" src={product.imageUrl} />
        <div className="topProductTitleCategory">
          <div className="topProductTitle">{product.title}</div>
          <div className="topProductSubtitle">{`in ${product.category}`}</div>
        </div>
        <div className="topProductTitleCategory">
          <div className="topProductPurchasesQuantity">
            {product.purchasesQuantity}
          </div>
          <div className="topProductSubtitle">in sales</div>
        </div>
        <div className="leaderboardPosition">
          {`#${product.leaderboardPosition}`}
        </div>
      </div>
      <Divider />
    </>
  );
};

export default TopProductsMenuItem;
