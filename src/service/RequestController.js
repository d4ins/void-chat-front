import {_apiBase} from '../constants';

export const post = async (data, url) => {
    const res = await fetch(`${_apiBase}${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });

    if (!res.ok) {
        throw new Error(`Error status: ${res.status}`);            
    }

    return res.json();
};

export const get = async (url) => {
    const res = await fetch(`${_apiBase}${url}`);

    if (!res.ok) {
        throw new Error(`Error status: ${res.status}`);  
    }

    return res.json();
};