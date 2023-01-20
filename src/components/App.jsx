import { lazy } from 'react';
import { Route, Routes } from 'react-router';
import { Layout } from './Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import authOperations from 'redux/auth/auth-operations';
import PrivateRoute from './Routes/PrivateRoute';
import { Profile } from 'views/Profile/Profile';
import PublicRoute from './Routes/PublicRoute';
import authSelectors from 'redux/auth/auth-selectors';

const Home = lazy(() => import('../pages/Home/Home'));
const RegisterView = lazy(() => import('../views/RegisterView/RegisterView'));
const LoginView = lazy(() => import('../views/LoginView/LoginView'));
const ContactsView = lazy(() => import('../views/ContactsView/ContactsView'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.selectIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="/" element={<PrivateRoute redirectTo="/login" />}>
            <Route path="contacts" element={<ContactsView />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          <Route
            path="/"
            element={<PublicRoute restricted redirectTo="/contacts" />}
          >
            <Route path="register" element={<RegisterView />} />
            <Route path="login" element={<LoginView />} />
          </Route>
        </Route>
      </Routes>
    )
  );
};
