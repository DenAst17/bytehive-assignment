/* eslint-disable */

import UserPanelComponent from "../../shared/components/user-panel/user-panel.component";
import DashboardComponent from "../../components/dashboard/dashboard.component";
import "./index.css";

const DashboardPageContainer = () => {
  return (
    <div className="container">
      <UserPanelComponent />
      <DashboardComponent />
    </div>
  );
};

export default DashboardPageContainer;
