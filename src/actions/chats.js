import {CHATS_INIT, CHATS_ADD_INFO, MESSAGE_ADD, MESSAGE_UPDATE_ID, MESSAGE_REMOVE} from '../constants';

export const chatsInit = (chats) => ({type: CHATS_INIT, payload:{chats}}); 
export const chatAddInfo = (users, messages, id) => ({type: CHATS_ADD_INFO, payload: {users, messages, id}}); 
export const messageAdd = (chatId, message) => ({type: MESSAGE_ADD, payload: {chatId, message}});
export const messageUpdateId = (chatId, messageId, newId) => ({type: MESSAGE_UPDATE_ID, payload: {chatId, messageId, newId}});
export const messageRemove = (chatId, messageId) => ({type: MESSAGE_REMOVE, payload: {chatId, messageId}});