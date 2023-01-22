import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { NothingAdded, NotFound, Error } from './Notifications/Notifications.styled';
import { Box } from './Box/Box.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './Contacts/ListOfContacts';
import { Filter } from './SearchForm/SearchForm';
import { getContacts, setIsLoading, setError } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/operations';
import { getFilteredList } from 'redux/selectors';
import { Loader } from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filteredList = useSelector(getFilteredList);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const isLoading = useSelector(setIsLoading);
  const error = useSelector(setError);
  return (
    <Box>
      <Toaster />
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {isLoading && !error && <Loader />}
      {!isLoading && !error && contacts.length === 0 && (
        <NothingAdded>This Book is empty. Yet.</NothingAdded>
      )}
      {contacts.length > 0 && <Filter />}
      {filteredList.length > 0 && <ContactList />}
      {contacts.length > 0 && filteredList.length === 0 && (
        <NotFound>Sorry, no one's here!</NotFound>
      )}
      {error && <Error>Oops! Something went wrong</Error>}
    </Box>
  );
};
