import { RequestHandler } from 'express';
import * as asyncHandler from 'express-async-handler';
import { CardsService } from './services/cards.service';
import { ExtensionsService } from './services/extensions.service';

export class RouteDefintion {
    constructor(public path: string, public method: string, public handler: RequestHandler) { }
}

export class AppRoutes {
    public static getRoutes(): RouteDefintion[] {
        return [
            {
                path: '/cards/random',
                method: 'GET',
                handler: asyncHandler(async (request, response) => {
                    const cardsService = new CardsService();
                    const card = await cardsService.getRandomCard();

                    response.type('application/json');
                    response.send(card);
                }),
            },
            {
                path: '/cards/query/:query',
                method: 'GET',
                handler: asyncHandler(async (request, response) => {
                    const cardsService = new CardsService();
                    const cards = await cardsService.query('40e08b1d-16f6-4038-b24e-8347eda79565', request.params.query);

                    response.type('application/json');
                    response.send(cards);
                }),
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
