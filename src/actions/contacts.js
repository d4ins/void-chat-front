import {CONTACTS_INIT, USER_UPDATE_ONLINE} from '../constants';

export const contactsInit = (contacts) => ({type: CONTACTS_INIT, payload: {contacts}});
export const updateOnline = (id, online) => ({type: USER_UPDATE_ONLINE, payload: {id, online}});