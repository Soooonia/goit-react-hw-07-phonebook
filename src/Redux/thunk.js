import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  getContacts,
} from 'components/Api/phonebookApi';

export const getContactsThunk = createAsyncThunk('contacts/fetchAll', () =>
  getContacts()
);

export const addContactsThunk = createAsyncThunk('contacts/addContact', data =>
  addContact(data)
);

export const deleteContactsThunk = createAsyncThunk('contacts/deleteContact', id =>
  deleteContact(id)
);