import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import {
  MdOutlinePersonAdd,
  MdOutlinePersonAddDisabled,
  MdPersonOutline,
  MdAlternateEmail,
  MdOutlinePassword,
  MdOutlinePersonPin,
} from 'react-icons/md';
import { Form, Label, Input, RegistrationBtn } from './RegistrationForm.styled';
import { useAuth } from 'utils/hooks';
import { register } from 'redux/authorization/operations';
import { Loader } from 'components/reusables/Loader/Loader';

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const { isLoading } = useAuth();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .then(unwrapResult)
      .then(response => {
        toast(`You were successfully registered as ${response.user.name}!`, {
          icon: <MdOutlinePersonAdd size={25} color="#327047" />,
        });
      })
      .catch(() =>
        toast(`Something's wrong. Please try again later.`, {
          icon: <MdOutlinePersonAddDisabled size={25} color="#aa8c3f" />,
        })
      );
    form.reset();
  };

  return isLoading ? (
    <Loader />
  ) : (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        <Input type="text" name="name" placeholder="username" required />
        <MdPersonOutline size={28} color="#364a4a" />
      </Label>
      <Label>
        <Input type="email" name="email" placeholder="email@mail.com" required />
        <MdAlternateEmail size={28} color="#364a4a" />
      </Label>
      <Label>
        <Input type="password" name="password" placeholder="password" required />
        <MdOutlinePassword size={28} color="#364a4a" />
      </Label>
      <RegistrationBtn type="submit">
        Register
        <MdOutlinePersonPin size={20} color="#4d6868" />
      </RegistrationBtn>
    </Form>
  );
};
