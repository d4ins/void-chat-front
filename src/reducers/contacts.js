import {CONTACTS_INIT, USER_UPDATE_ONLINE} from '../constants';

const initialState = [];

const contacts = (state = initialState, {type, payload}) => {
    switch(type) {
        case CONTACTS_INIT: {
            return [...payload.contacts];
        }

        case USER_UPDATE_ONLINE: {
            const {id, online} = payload;

            const index = state.findIndex((contact) => id === contact);

            const newContact = {
                ...state[index],
                online
            };

            return [...state.slice(0, index), newContact, ...state.slice(index + 1)];
        }

        default: {
            return state;
        }
    }
};

export default contacts;