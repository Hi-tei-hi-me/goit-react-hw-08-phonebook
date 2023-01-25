import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { MdBook, MdSearchOff, MdOutlineErrorOutline } from 'react-icons/md';
import { Box } from './Box/Box.styled';
import { ContactForm } from './ContactAddForm/ContactAddForm';
import { ContactList } from './Contacts/ListOfContacts';
import { Filter } from './ContactsFilter/ContactsFilter';
import { Loader } from './Loader/Loader';
import { NothingAdded, NotFound, Error } from './Notifications/Notifications.styled';
import { getContacts, setIsLoading, setError } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { getFilteredList } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(setIsLoading);
  const error = useSelector(setError);
  const filteredList = useSelector(getFilteredList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box>
      <Toaster />
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {isLoading && !error && <Loader />}
      {!isLoading && !error && contacts.length === 0 && (
        <NothingAdded>
          <MdBook size={25} />
          This Book is empty. Yet.
        </NothingAdded>
      )}
      {contacts.length > 0 && <Filter />}
      {filteredList.length > 0 && <ContactList />}
      {contacts.length > 0 && filteredList.length === 0 && (
        <NotFound>
          <MdSearchOff size={25} />
          Sorry, no one's here!
        </NotFound>
      )}
      {error && (
        <Error>
          <MdOutlineErrorOutline size={25} color="#b24a4a" />
          Oops! Something went wrong...
        </Error>
      )}
    </Box>
  );
};
