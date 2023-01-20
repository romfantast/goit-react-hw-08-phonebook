import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';
import authSelectors from 'redux/auth/auth-selectors';

export default function PrivateRoute({ redirectTo = '/' }) {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to={redirectTo} />;
}
