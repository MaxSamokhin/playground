import * as Express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as uuid from 'uuid/v4';

import {NEWS_OK, USER_DATA_BAD, USER_DATA_OK, VALIDATE_BAD, VALIDATE_OK} from './data';

class App {
    private app: Express.Application;
    private port: number = 8001;
    private ids: any;

    constructor() {
        this.app = Express();
        this.app.use(cors({
            origin: 'http://localhost:7001'
        }));
        this.app.use(bodyParser.json());
        this.ids = {};
        this.startRoutes();

        this.app.listen(this.port, () => {
            console.log(`App start on port ${this.port}`);
        });
    }

    private startRoutes() {
        this.app.post('/api/v1/validate', this.validateController.bind(this));
        this.app.get('/api/v1/user-info/:id', this.userInfoController.bind(this));
        this.app.get('/api/v1/news', this.newsController.bind(this));
        this.app.get('/api/v1/logout', this.logoutController.bind(this));
        this.app.get('/api/v1/user', this.userController.bind(this));
    }

    private userController(req: Express.Request, res: Express.Response) {
        const id = req.cookies.auth;
        if (this.ids[id] === undefined) {
            return res.status(401).end();
        }

        res.json(USER_DATA_OK);
    }

    private logoutController(req: Express.Request, res: Express.Response) {
        const id = req.cookies.auth;
        if (this.ids[id] === undefined) {
            return res.status(401).end();
        }

        res.cookie('auth', '', {expires: new Date()});
        res.json({});
    }

    private newsController(req: Express.Request, res: Express.Response) {
        res.status(200).json(NEWS_OK).end();
    }

    private validateController(req: Express.Request, res: Express.Response) {
        const email: string = req.body.email || null;
        const password: string = req.body.password || null;

        if (email !== 'test' || password !== 'test') {
            res.status(401).json(VALIDATE_BAD).end();
            return;
        }

        const id = uuid();
        this.ids[id] = email;

        res.cookie('auth', id, {expires: new Date(Date.now() + 1000 * 60 * 10)});
        res.status(200).json(VALIDATE_OK).end();

    }

    private userInfoController(req: Express.Request, res: Express.Response) {
        if (+req.params.id === 1) {
            res.status(200).json(USER_DATA_OK).end();
            return;
        }
        res.status(404).json(USER_DATA_BAD).end();
    }
}

new App();
