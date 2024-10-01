import React from "react";

import LogoIcon from "../../assets/icons/small-logo.svg";
import "./navbar.component.css";
import MenuButton from "./menu-button.component";
import Overview from "../../assets/icons/overview.svg";
import Analytics from "../../assets/icons/analytics.svg";
import Ecommerce from "../../assets/icons/ecommerce.svg";
import Crypto from "../../assets/icons/crypto.svg";
import Products from "../../assets/icons/products.svg";
import Orders from "../../assets/icons/orders.svg";
import Invoices from "../../assets/icons/invoices.svg";
import Logistics from "../../assets/icons/logistics.svg";
import Documentation from "../../assets/icons/documentation.svg";
import { MAIN_PAGES, ANALYTICS_PAGES } from "../../shared/consts/pages.enum";

type OwnProps = Record<string, unknown>;

const Navbar: React.FC<OwnProps> = () => {
  return (
    <nav className="navigationContainer">
      <div className="logoContainer">
        <div className="logoIcon">
          <img src={LogoIcon} />
        </div>
        <div className="titleContainer">
          <div className="title">Devias</div>
          <div className="description">Premium tier</div>
        </div>
      </div>

      <section className="mainTabs">
        <MenuButton iconSrc={Overview} text={MAIN_PAGES.OVERVIEW} />
        <MenuButton iconSrc={Analytics} text={MAIN_PAGES.ANALYTICS} />
        <MenuButton iconSrc={Ecommerce} text={MAIN_PAGES.ECOMMERCE} />
        <MenuButton iconSrc={Crypto} text={MAIN_PAGES.CRYPTO} />
      </section>

      <div className="analyticsSectionTitle">ANALYTICS</div>

      <section className="analyticsTabs">
        <MenuButton
          iconSrc={Products}
          text={ANALYTICS_PAGES.PRODUCTS}
          hasChevron={true}
        />
        <MenuButton
          iconSrc={Orders}
          text={ANALYTICS_PAGES.ORDERS}
          hasChevron={true}
        />
        <MenuButton
          iconSrc={Invoices}
          text={ANALYTICS_PAGES.INVOICES}
          hasChevron={true}
        />
        <MenuButton
          iconSrc={Logistics}
          text={ANALYTICS_PAGES.LOGISTICS}
          hasChevron={true}
        />
      </section>

      <button className="documentationButton">
        <div className="logoIcon">
          <img src={Documentation} />
        </div>
        <div className="documentationText">Documentation</div>
      </button>
    </nav>
  );
};

export default Navbar;
