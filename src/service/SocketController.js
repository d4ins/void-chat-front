import {_apiBase} from '../constants';
import {io} from 'socket.io-client';

export default class SocketController {
    _apiBase = _apiBase
    
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

    
}