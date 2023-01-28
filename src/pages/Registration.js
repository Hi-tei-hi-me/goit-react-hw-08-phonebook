import { Helmet } from 'react-helmet-async';
import { RegistrationForm } from 'components/forms/RegistrationForm/RegistrationForm';

export default function Register() {
  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <h2>
        New User
        <br />
        registration form
      </h2>
      <RegistrationForm />
    </>
  );
}
