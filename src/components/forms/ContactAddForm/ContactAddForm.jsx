import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import {
  MdPersonAddDisabled,
  MdPersonAdd,
  MdPerson,
  MdPhone,
  MdAddToHomeScreen,
} from 'react-icons/md';
import { BsPatchExclamation } from 'react-icons/bs';
import { Form, FormField, Label, Input, AddBtn } from './ContactAddForm.styled';
import { addContact } from 'redux/contacts/operations';
import { selectAllContacts } from 'redux/contacts/selectors';

export const ContactForm = () => {
  const contacts = useSelector(selectAllContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const resetForm = () => {
    setName('');
    setNumber('');
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    const newContact = { name, number };
    if (
      contacts.some(contact => {
        return contact.name.trim().toLowerCase() === newContact.name.trim().toLowerCase();
      })
    ) {
      return toast(`${newContact.name} is already in your Book`, {
        icon: <MdPersonAddDisabled size={25} color="#ccba21" />,
      });
    } else {
      dispatch(addContact(newContact))
        .then(response =>
          toast(`${newContact.name} was successfully added to your Book`, {
            icon: <MdPersonAdd size={28} color="#327047" />,
          })
        )
        .catch(error => toast(`Oops!`, error.message), {
          icon: <BsPatchExclamation size={30} color="#5d3d79" />,
        });
      resetForm();
    }
  };
  const handleChange = evt => {
    const { name, value } = evt.target;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };
  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <FormField>
        <Label htmlFor="name">
          <MdPerson size={28} color="#4e4e4e" />
        </Label>
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="name"
          value={name}
          onChange={handleChange}
          required
        />
      </FormField>
      <FormField>
        <Label htmlFor="number">
          <MdPhone size={28} color="#4e4e4e" />
        </Label>
        <Input
          type="tel"
          name="number"
          placeholder="phone ???"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleChange}
          required
        />
      </FormField>
      <AddBtn type="submit">
        Add contact <MdAddToHomeScreen size={20} color="rgb(77, 104, 104)" />
      </AddBtn>
    </Form>
  );
};
