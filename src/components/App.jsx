import { Route, Routes } from 'react-router';
import { Layout } from './Layout/Layout';
import { Home } from '../pages/Home/Home';
import { RegisterView } from 'views/RegisterView/RegisterView';
import { LoginView } from 'views/LoginView/LoginView';
import { ContactsView } from 'views/ContactsView/ContactsView';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import authOperations from 'redux/auth/auth-operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<RegisterView />} />
        <Route path="login" element={<LoginView />} />
        <Route path="contacts" element={<ContactsView />} />
      </Route>
    </Routes>
  );
};
