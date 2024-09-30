import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPageContainer from '../pages/signin';
import { jwtStorageService } from '../services/jwt.storage.service';
import AppContainer from '../layout/app-container.component';
import { ROUTER_KEYS } from '../consts/app.keys.const';

export const MainRouter = () => {
  const isAuthorized = jwtStorageService.isToken();
  return (
    <Router>
      <Routes>
        {
          isAuthorized
            ? <Route path="/" element={<AppContainer />} />
            : <>
                <Route
                  path="*"
                  element={<Navigate to={ROUTER_KEYS.LOGIN} replace />}
                />
                <Route path={ROUTER_KEYS.LOGIN} element={<LoginPageContainer />} />
              </>
        }
      </Routes>
    </Router>
  );
};
