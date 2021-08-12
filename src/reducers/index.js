import { combineReducers } from 'redux';
import contacts from './contacts';
import setting from './setting';
import chats from './chats';

const rootReducer = combineReducers({
    contacts, setting, chats
});