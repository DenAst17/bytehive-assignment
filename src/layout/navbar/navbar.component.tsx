import React from "react";

import LogoIcon from "../../assets/icons/small-logo.svg";
import "./navbar.component.css";
import MenuButton from "./menu-button.component";
import OverviewIcon from "../../assets/icons/overview.svg";
import AnalyticsIcon from "../../assets/icons/analytics.svg";
import EcommerceIcon from "../../assets/icons/ecommerce.svg";
import CryptoIcon from "../../assets/icons/crypto.svg";
import ProductsIcon from "../../assets/icons/products.svg";
import OrdersIcon from "../../assets/icons/orders.svg";
import InvoicesIcon from "../../assets/icons/invoices.svg";
import LogisticsIcon from "../../assets/icons/logistics.svg";
import DocumentationIcon from "../../assets/icons/documentation.svg";
import { MAIN_PAGES, ANALYTICS_PAGES } from "../../shared/consts/pages.enum";

const Navbar: React.FC = () => {
  const renderMainTabs = () => (
    <section className="mainTabs">
      <MenuButton
        iconSrc={OverviewIcon}
        text={MAIN_PAGES.OVERVIEW}
        isSelected
      />
      <MenuButton iconSrc={AnalyticsIcon} text={MAIN_PAGES.ANALYTICS} />
      <MenuButton iconSrc={EcommerceIcon} text={MAIN_PAGES.ECOMMERCE} />
      <MenuButton iconSrc={CryptoIcon} text={MAIN_PAGES.CRYPTO} />
    </section>
  );

  const renderAnalyticsTabs = () => (
    <section className="analyticsTabs">
      <MenuButton
        iconSrc={ProductsIcon}
        text={ANALYTICS_PAGES.PRODUCTS}
        hasChevron
      />
      <MenuButton
        iconSrc={OrdersIcon}
        text={ANALYTICS_PAGES.ORDERS}
        hasChevron
      />
      <MenuButton
        iconSrc={InvoicesIcon}
        text={ANALYTICS_PAGES.INVOICES}
        hasChevron
      />
      <MenuButton
        iconSrc={LogisticsIcon}
        text={ANALYTICS_PAGES.LOGISTICS}
        hasChevron
      />
    </section>
  );

  return (
    <nav className="navigationContainer">
      <div className="logoContainer">
        <div className="logoIcon">
          <img src={LogoIcon} alt="Logo" />
        </div>
        <div className="titleContainer">
          <div className="title">Devias</div>
          <div className="description">Premium tier</div>
        </div>
      </div>

      {renderMainTabs()}

      <div className="analyticsSectionTitle">ANALYTICS</div>

      {renderAnalyticsTabs()}

      <button className="documentationButton">
        <div className="logoIcon">
          <img src={DocumentationIcon} alt="Documentation" />
        </div>
        <div className="documentationText">Documentation</div>
      </button>
    </nav>
  );
};

export default Navbar;
