import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { MdOutlineBook, MdSearchOff, MdOutlineErrorOutline } from 'react-icons/md';
import { ContactsBookWrap } from './ContactsBook.styled';
import { ContactForm } from 'components/forms/ContactAddForm/ContactAddForm';
import { ContactList } from 'components/Contacts/ListOfContacts';
import { getFilteredList } from 'redux/selectors';
import { Filter } from 'components/ContactsFilter/ContactsFilter';
import { selectError, selectIsLoading, selectAllContacts } from '../redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import {
  NothingAdded,
  NotFound,
  Error,
} from 'components/reusables/Notifications/Notifications.styled';
import { Loader } from 'components/reusables/Loader/Loader';
import { useAuth } from 'utils/hooks';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const { isLoading } = useAuth();
  const contacts = useSelector(selectAllContacts);
  const filteredList = useSelector(getFilteredList);
  const contactIsLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <ContactsBookWrap>
      <Helmet>
        <title>Your Book</title>
      </Helmet>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1>Phonebook</h1>
          <ContactForm />
          <h2>Contacts</h2>
          {contactIsLoading && !error && <Loader />}
          {!contactIsLoading && !error && contacts.length === 0 && (
            <NothingAdded>
              <MdOutlineBook size={25} />
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
        </>
      )}
    </ContactsBookWrap>
  );
}
