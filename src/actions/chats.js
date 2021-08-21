import {CHATS_INIT, CHATS_ADD_INFO, MESSAGE_ADD, MESSAGE_UPDATE_ID} from '../constants';

export const chatsInit = (chats) => ({type: CHATS_INIT, payload:{chats}}); 
export const chatAddInfo = (users, messages, id) => ({type: CHATS_ADD_INFO, payload: {users, messages, id}}); 
export const messageAdd = (chatId, message) => ({type: MESSAGE_ADD, payload: {chatId, message}});
export const messageUpdateId = (chatId, messageId, newId) => ({type: MESSAGE_UPDATE_ID, payload: {chatId, messageId, newId}});