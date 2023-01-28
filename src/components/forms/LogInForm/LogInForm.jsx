import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import {
  MdOutlinePersonAdd,
  MdAlternateEmail,
  MdOutlinePassword,
  MdOutlineLogin,
} from 'react-icons/md';
import { BsPatchExclamation } from 'react-icons/bs';
import { Form, Label, Input, LoginBtn } from './LogInForm.styled';
import { useAuth } from 'utils/hooks';
import { logIn } from 'redux/authorization/operations';
import { Loader } from 'components/reusables/Loader/Loader';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const { isLoading } = useAuth();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .then(unwrapResult)
      .then(response => {
        toast(`You have successfully logged in as ${response.user.name}!`, {
          icon: <MdOutlinePersonAdd size={25} color="#327047" />,
        });
      })
      .catch(() =>
        toast(`Something's wrong. Please try again later.`, {
          icon: <BsPatchExclamation size={25} color="#5d3d79" />,
        })
      );
    form.reset();
  };

  return isLoading ? (
    <Loader />
  ) : (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        <MdAlternateEmail size={28} color="#4e4e4e" />
        <Input type="email" name="email" placeholder="email@mail.com" required />
      </Label>
      <Label>
        <MdOutlinePassword size={28} color="#4e4e4e" />
        <Input type="password" name="password" placeholder="password" required />
      </Label>
      <LoginBtn type="submit">
        Log In
        <MdOutlineLogin size={20} color="rgb(77, 104, 104)" />
      </LoginBtn>
    </Form>
  );
};
