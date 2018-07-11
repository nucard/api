import * as request from 'request';

export class HttpService {
    public get<T>(uri: string): Promise<T> {
        return new Promise((resolve, reject) => {
            request.get(uri, (err, response, body) => {
                if (err) {
                    reject('Http error: ' + err);
                } else {
                    resolve(body as T);
                }
            });
        });
    }
}
