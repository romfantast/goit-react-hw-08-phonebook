import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';
import authSelectors from 'redux/auth/auth-selectors';

export default function PublicRoute({ restricted = false, redirectTo = '/' }) {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Outlet />;
}
