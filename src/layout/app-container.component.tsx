import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./navbar/navbar.component";
import DashboardPageContainer from "../pages/home";
import './app-container.component.css';
import { ROUTER_KEYS } from "../consts/app.keys.const";

const AppContainer = () => {

  return (
    <div className="root">
      <Navbar />
      <Routes>
        <Route path={`/${ROUTER_KEYS.DASHBOARD}`} element={<DashboardPageContainer />} />
        <Route
          path="/"
          element={<Navigate to={`/${ROUTER_KEYS.LOGIN}`} />}
        />
      </Routes>
    </div>
  );
};

export default AppContainer;
