/* eslint-disable */

import "./index.css";
import LoginComponent from "../../components/auth/login.component";
import Logo from "../../assets/logo.svg";
import BackgroundIllustraion from "../../assets/hero-illustration.svg";

const LoginPageContainer = () => {
  return (
    <div className="signInContainer">
      <div className="logoWrapper">
        <img src={Logo} />
      </div>
      <div className="illustrationWrapper">
        <img src={BackgroundIllustraion} />
      </div>
      <LoginComponent />
    </div>
  );
};

export default LoginPageContainer;
