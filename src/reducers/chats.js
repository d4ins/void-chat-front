import {CHATS_INIT} from '../constants';

const initialState = [];

const chats = (state = initialState, {type, payload}) => {
    switch(type) {
        case CHATS_INIT: {
            return payload.chats;
        }

        default: {
            return state;
        }
    }
};

export default chats;