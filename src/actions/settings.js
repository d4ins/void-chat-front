import {USER_INIT, ACCESS_TOGGLE, LOADING_TOGGLE} from '../constants';

export const userInit = (user) => ({type: USER_INIT, payload: {user}});
export const accessToggle = () => ({type: ACCESS_TOGGLE});
export const loadingToggle = () => ({type: LOADING_TOGGLE});