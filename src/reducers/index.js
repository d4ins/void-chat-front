import { combineReducers } from 'redux';
import contacts from './contacts';
import settings from './settings';
import chats from './chats';

const rootReducer = combineReducers({
    contacts, settings, chats
});

export default rootReducer;