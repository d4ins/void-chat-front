import {CONTACTS_INIT} from '../constants';

const initialState = [];

const contacts = (state = initialState, {type, payload}) => {
    switch(type) {
        case CONTACTS_INIT: {
            return payload.contacts;
        }

        default: {
            return state;
        }
    }
};

export default contacts;