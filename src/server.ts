import * as express from 'express';
import { Config } from './config';
const app = express();

export class Server {
    private _app = express();

    constructor(private _config: Config) { }

    public start() {
        this._app = express();
        this._app.get('/', (request, response) => {
            response.send('Hello, friend.');
        });

        this._app.listen(Config.port, () => console.log(`API is up on ${Config.port}.`));
    }
}
