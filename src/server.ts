import * as express from 'express';
import { Config } from './config';
import { AppRoutes } from './routes';

export class Server {
    private _app = express();

    constructor(private _config: Config) { }

    public start() {
        this._app = express();

        for (const route of AppRoutes.getRoutes()) {
            this._app.get(route.path, route.handler);
        }

        this._app.listen(Config.port, () => console.log(`API is up on ${Config.port}.`));
    }
}
