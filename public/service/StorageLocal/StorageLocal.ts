const KEY_STORE = 'store';

interface IItem {
    id: string;
    text: string;
    isChecked: boolean;
}

export default class StorageLocal {
    constructor() {
        const store = localStorage[KEY_STORE];
        if (!store) {
            this._setJSON(KEY_STORE, {store: []});
        }
    }

    public add(text) {
        const item: IItem = {
            id: this.generateId(),
            text,
            isChecked: false
        };

        const stor = this._getJSON(KEY_STORE);
        stor.store.push(item);
        this._setJSON(KEY_STORE, stor);
    }

    public delete(ids: Array<string>) {
        const stor = this._getJSON(KEY_STORE);
        stor.store = stor.store.reduce((res, elem) => {
            if (ids.indexOf(elem.id) !== -1) {
                return res;
            }
            res.push(elem);
            return res;
        }, []);
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
