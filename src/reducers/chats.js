import {CHATS_INIT, CHATS_ADD_INFO, MESSAGE_ADD, MESSAGE_UPDATE_ID} from '../constants';

const initialState = [];

const chats = (state = initialState, {type, payload}) => {
    switch(type) {
        case CHATS_INIT: {
            return [...payload.chats];
        }

        case CHATS_ADD_INFO: {
            const {id, users, messages} = payload;
            const index = state.findIndex((chat) => chat.id === id);

            const newMessages = state[index].messages ? [...state[index].messages, ...messages]: [...messages];
            const newUsers = state[index].users ? [...state[index].users, ...users]: [...users];

            const newChat = {
                ...state[index],
                messages: newMessages,
                users: newUsers
            };
            
            return [...state.slice(0, index), newChat, ...state.slice(index+1)];
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
                messages: [...state[index].messages.slice(0, messageIndex), newMessage, ...state[index].messages.slice(messageIndex+1)]
            };

            return [...state.slice(0, index), newChat, ...state.slice(index+1)];
        }  

        default: {
            return state;
        }
    }
};

export default chats;