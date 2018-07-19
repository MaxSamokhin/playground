import store from "../../store/Store";
const KEY_STORE = 'store';
import eventEmitter from '../../service/EventEmitter/eventEmitter';

interface IItem {
    id: string,
    text: string,
    isComplete: boolean
}

export default class StorageLocal {
    constructor() {
        let store = localStorage[KEY_STORE];
        if(!store)
            this._setJSON(KEY_STORE, {store: []});
    }

    public add(text) {
        const item: IItem = {
            id: this.generateId(),
            text: text,
            isComplete: false
        };

        const stor = this._getJSON(KEY_STORE);
        stor.store.push(item);
        this._setJSON(KEY_STORE, stor);

        eventEmitter.emit('ADD_NOTE', null);
    }

    public delete(id) {
        const stor = this._getJSON(KEY_STORE);
        const index = stor.store.find(elem => elem.id === id);
        if (!index) {
            return;
        }
        stor.store.slice(index, 1);
        this._setJSON(KEY_STORE, store);
    }

    public change(id, text, completed) {
        const stor = this._getJSON(KEY_STORE);
        const index = stor.store.find(elem => elem.id === id);
        if (!index) {
            return;
        }

        stor.store[index] = {
            id: id,
            text: text,
            isComplete: completed
        };

        this._setJSON(KEY_STORE, stor);
    }

    public getAll() {
        return this._getJSON(KEY_STORE);
    }


    private _setJSON(key, value) {
        try {
            localStorage[key] = JSON.stringify(value);
        } catch (e) {
            console.log(e);
            this._setJSON(KEY_STORE, {store: []});
        }
    }

    private _getJSON(key) {
        try {
            const val = localStorage[key];
            return val ? JSON.parse(val) : null;
        } catch (e) {
            console.log(e);
            this._setJSON(KEY_STORE, {store: []});
            return null;
        }
    }

    private generateId(): string {
        return '_' + Math.random().toString(36).substr(2, 9);
    }
}