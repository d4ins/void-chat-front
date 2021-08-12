import {CONTACTS_INIT} from '../constants';

export const contactsInit = (contacts) => ({type: CONTACTS_INIT, payload: {contacts}});