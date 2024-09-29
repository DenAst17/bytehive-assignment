import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { APP_KEYS } from '../consts';
import LogInPageContainer from '../pages/signin';
import { jwtStorageService } from '../services/jwt.storage.service';
import HomePageContainer from '../pages/home';

export const MainRouter = () => {
  const isAuthorized = jwtStorageService.isToken();
  return (
    <Router>
      {
        isAuthorized
          ?
          <Routes>
            <Route path="/" element={<HomePageContainer />} />
            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />
          </Routes>
          :
          <Routes>
            <Route
              path="*"
              element={<Navigate to={APP_KEYS.ROUTER_KEYS.LOGIN} replace />}
            />
            <Route element={<LogInPageContainer />} path={APP_KEYS.ROUTER_KEYS.LOGIN} />
          </Routes>
      }
    </Router>
  )
};