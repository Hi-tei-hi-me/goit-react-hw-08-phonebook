import { Helmet } from 'react-helmet-async';
import { LoginForm } from 'components/forms/LogInForm/LogInForm';

export default function Login() {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <h2>
        Login form
        <br />
        for registered Users
      </h2>
      <LoginForm />
    </>
  );
}
