import { RequestHandler } from 'express';
import { CardsService } from './services/cards.service';

export class RouteDefintion {
    public path: string;
    public method: string;
    public handler: RequestHandler;
}

export class AppRoutes {
    public static getRoutes(): RouteDefintion[] {
        return [
            {
                path: '/query/:query',
                method: 'GET',
                handler: async (request, response) => {
                    const cardsService = new CardsService();
                    const cards = await cardsService.search(request.params.query);

                    response.send(cards);
                },
            },
            {
                path: '/',
                method: 'GET',
                handler: (request, response) => {
                    response.send('Hello, friend.');
                },
            },
        ];
    }
}
