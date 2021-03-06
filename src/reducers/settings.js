import {USER_INIT, LOADING_TOGGLE, ACCESS_TOGGLE, USER_UPDATE_ONLINE} from '../constants';

const initialState = {
    user: {
        fullName: '',
        desc: '',
        email: '',
        id: '',
        avatar: '',
    },
    accessed: false,
    loading: false
};

const settings = (state = initialState, {type, payload}) => {
    switch(type) {
        case USER_INIT: {
            return {
                ...state,
                user: payload.user
            };
        }

        case LOADING_TOGGLE: {
            return {
                ...state,
                loading: !state.loading
            };
        }

        case ACCESS_TOGGLE: {
            return {
                ...state,
                accessed: !state.accessed
            };
        }

        default: {
            return state;
        }
    }
};

export default settings;