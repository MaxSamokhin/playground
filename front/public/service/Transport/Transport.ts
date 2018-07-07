import {GET, POST, CONFIG} from '../../constants/Api/Api';

export default class Transport {

    public static get(path, data = null) {
        return Transport._request(GET, path, data);
    }

    public static post(path, data = null) {
        return Transport._request(POST, path, data);
    }

    private static _request(method, path, data = null) {
        const mode: RequestMode = 'cors';
        const credentials: RequestCredentials = 'include';

        const fetchOptions = {
            method,
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            mode,
            credentials,
            body: null
        };

        if (data) {
            fetchOptions.body = JSON.stringify(data);
        }

        return fetch(`${CONFIG.apiPrefix}:${CONFIG.serverPort}/${path}`, fetchOptions)
            .then((resp) => resp.json());
    }
}