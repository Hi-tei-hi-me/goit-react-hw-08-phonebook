import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { RestrictedRoute } from 'utils/routes/RestrictedRoute';
import { PrivateRoute } from 'utils/routes/PrivateRoute';
import { refreshUser } from 'redux/authorization/operations';
import { useAuth } from 'utils/hooks';
import { Loader } from 'components/reusables/Loader/Loader';

const HomePage = lazy(() => import('../pages/Home'));
const RegistrationPage = lazy(() => import('../pages/Registration'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsBook = lazy(() => import('../pages/ContactsBook'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={<RestrictedRoute redirectTo="/contacts" component={RegistrationPage} />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/contacts" component={LoginPage} />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute redirectTo="/login" component={ContactsBook} />}
        />
      </Route>
    </Routes>
  );
};
