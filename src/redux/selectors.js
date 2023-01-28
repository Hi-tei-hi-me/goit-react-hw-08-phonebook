import { createSelector } from '@reduxjs/toolkit';
import { selectAllContacts } from './contacts/selectors';
import { selectFilter } from './searchForm/selectors';

export const getFilteredList = createSelector(
  [selectAllContacts, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.trim().toLowerCase();
    return contacts.filter(({ name }) => name.trim().toLowerCase().includes(normalizedFilter));
  }
);
