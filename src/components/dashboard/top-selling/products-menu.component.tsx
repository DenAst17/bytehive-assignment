import React from "react";
import { Card, CardContent } from "@mui/material";
import ArrowRight from "../../../assets/icons/arrow-right.svg";
import TopProductsMenuItem from "./products-menu-item.component";
import { GetApiProducts200Item } from "../../../models";
import "./products-menu.component.css";

interface OwnProps {
  products: GetApiProducts200Item[];
}

const TopProductsMenu: React.FC<OwnProps> = ({ products }) => {
  return (
    <Card
      sx={{
        padding: "0px",
        boxShadow: "0px 5px 22px 0px #0000000A",
        borderRadius: "20px",
      }}
    >
      <CardContent
        sx={{ padding: "0px", "&:last-child": { paddingBottom: "0px" } }}
      >
        <div className="topSellingProductTitle">Top Selling Products</div>
        {products?.map((product) => (
          <TopProductsMenuItem key={product.id} product={product} />
        ))}
        <div className="seeAllProductsButton">
          <div className="seeAllProductsText">See All Products</div>
          <img src={ArrowRight} alt="See All Products" />
        </div>
      </CardContent>
    </Card>
  );
};

export default TopProductsMenu;
