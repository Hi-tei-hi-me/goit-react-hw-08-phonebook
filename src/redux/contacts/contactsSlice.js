import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from 'redux/operations';

const contactsInitialState = { contacts: [], isLoading: false, error: '' };

const handlePending = state => ({
  ...state,
  isLoading: true,
});

const handleRejected = (state, action) => ({
  ...state,
  isLoading: false,
  error: action.payload,
});

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          error: null,
          contacts: action.payload,
        };
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          error: null,
          contacts: [...state.contacts, action.payload],
        };
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          error: null,
          contacts: state.contacts.filter(({ id }) => id !== action.payload.id),
        };
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
