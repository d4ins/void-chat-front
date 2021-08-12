import {io} from 'socket.io-client';

export default class SocketController {
    _apiBase = 'http://192.168.1.6:3001'
    connect = () => {
        this.socket = io(this._apiBase);
    }

    disconnect = () => {
        this.socket.disconnect();
    }

    getSocket = () => {
        return this.socket
    }

    on = (header, callback) => {
        this.socket.on(header, callback)
    }

    emit = (header, data) => {
        this.socket.emit(header, data);
    }


    login = async (data) => {
        const res = await fetch(`${this._apiBase}/login`, {
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        return res;
    }
}