import {USER_INIT} from '../constants';

export const userInit = (user) => ({type: USER_INIT, payload: {user}});