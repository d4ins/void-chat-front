import {CHATS_INIT, MESSAGE_ADD, MESSAGE_UPDATE_ID, MESSAGE_REMOVE} from '../constants';

const initialState = [];

const chats = (state = initialState, {type, payload}) => {
    switch(type) {
        case CHATS_INIT: {
            return [...payload.chats];
        }

        case MESSAGE_ADD: {
            const {chatId, message} = payload;

            const index = state.findIndex(({id}) => id === chatId); 

            const newChat = {
                ...state[index],
                messages: [...state[index].messages, message]
            };

            return [...state.slice(0, index), newChat, ...state.slice(index+1)];
        }

        case MESSAGE_UPDATE_ID: {
            const {chatId, messageId, newId} = payload;

            const chatIndex = state.findIndex(({id}) => id === chatId);
            const messageIndex = state[index].messages.findIndex(({id}) => id === messageId);
            const newMessage = {
                ...state[messageIndex].messages,
                sended: true,
                id: newId
            };

            const newChat = {
                ...state[chatIndex],
                messages: [...state[index].messages.slice(0, messageIndex), newMessage, ...state[index].messages.slice(messageIndex + 1)]
            };

            return [...state.slice(0, index), newChat, ...state.slice(index+1)];
        } 
        
        case MESSAGE_REMOVE: {
            const {chatId, messageId} = payload;
            const chatIndex = state.findIndex(({id}) => id === chatId);
            const messageIndex = state[chatIndex].messages.findIndex(({id}) => id === messageId);
            const newChat = {
                ...state[chatIndex],
                messages: [...state[chatIndex].messages.slice(0, messageIndex), ...state[chatIndex].messages.slice(messageIndex + 1)]
            };

            return [...state.slice(0, chatIndex), newChat, ...state.slice(chatIndex + 1)];
        }

        default: {
            return state;
        }
    }
};

export default chats;