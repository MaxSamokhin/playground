'use strict';

class EventEmitter {
    private _listeners: {};

    constructor() {
        this._listeners = {};
    }

    public on(event, listener) {
        this._listeners[event] = this._listeners[event] || [];
        this._listeners[event].push(listener);
        return listener;
    }

    public off(event) {
        this._listeners[event] = this._listeners[event] || [];
        delete this._listeners[event];
    }

    public emit(event, data) {
        if (this._listeners[event]) {
            this._listeners[event].forEach((listener) => {
                listener(data);
            });
        }
    }
}

const eventEmitter = new EventEmitter();
export default eventEmitter;
