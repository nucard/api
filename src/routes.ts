import { RequestHandler } from 'express';
import * as asyncHandler from 'express-async-handler';
import { CardsService } from './services/cards.service';
import { ExtensionsService } from './services/extensions.service';
import { MtgService } from './services/mtg.service';

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

                    response.send(card);
                }),
            },
            {
                path: '/cards/query/:query',
                method: 'GET',
                handler: asyncHandler(async (request, response) => {
                    const cardsService = new CardsService();
                    const cards = await cardsService.query('40e08b1d-16f6-4038-b24e-8347eda79565', request.params.query);

                    response.send(cards);
                }),
            },
            {
                path: '/mtg/cards/random',
                method: 'GET',
                handler: asyncHandler(async (request, response) => {
                    const mtgService = new MtgService();
                    const card = await mtgService.getRandomCard();

                    response.send(card);
                }),
            },
            {
                path: '/mtg/cards/query/:query',
                method: 'GET',
                handler: asyncHandler(async (request, response) => {
                    const mtgService = new MtgService();
                    const cards = await mtgService.search(request.params.query);

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
