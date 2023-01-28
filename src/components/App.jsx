import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { TbError404 } from 'react-icons/tb';
import { Layout } from './Layout/Layout';
import { RestrictedRoute } from 'utils/routes/RestrictedRoute';
import { PrivateRoute } from 'utils/routes/PrivateRoute';
import { refreshUser } from 'redux/authorization/operations';
import { useAuth } from 'utils/hooks';
import { WrongPage } from './reusables/Notifications/Notifications.styled';
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
      <Route
        path="*"
        element={
          <WrongPage>
            <TbError404 size={60} color="#b24a4a" />
            You are looking for unexisting page!
            <br />
            That's cool, but please try anything else.
          </WrongPage>
        }
      />
    </Routes>
  );
};
