import { RequestHandler } from 'express';
import * as asyncHandler from 'express-async-handler';
import { ExtensionDataService } from './services/extension-data.service';
import { ExtensionsService } from './services/extensions.service';

export class RouteDefintion {
    constructor(public path: string, public method: string, public handler: RequestHandler) { }
}

export class AppRoutes {
    public static getRoutes(): RouteDefintion[] {
        return [
            {
                path: '/card/:extensionId/:cardId',
                method: 'GET',
                handler: asyncHandler(async (req, res) => {
                    const dataService = new ExtensionDataService();
                    const card = await dataService.getCard(req.params.cardId, req.params.extensionId);

                    res.type('application/json');
                    res.send(card);
                }),
            },
            {
                path: '/cards/random/:userId',
                method: 'GET',
                handler: asyncHandler(async (request, response) => {
                    const cardsService = new ExtensionDataService();
                    const card = await cardsService.getRandomCard(request.params.userId);

                    response.type('application/json');
                    response.send(card);
                }),
            },
            {
                path: '/cards/search/:query',
                method: 'GET',
                handler: asyncHandler(async (request, response) => {
                    const dataService = new ExtensionDataService();
                    // this is just a random userId
                    const cards = await dataService.search('40e08b1d-16f6-4038-b24e-8347eda79565', request.params.query);

                    response.type('application/json');
                    response.send(cards);
                }),
            },
            {
                path: '/external-info-providers/:extensionId/:cardId',
                method: 'GET',
                handler: asyncHandler(async (request, response) => {
                    const dataService = new ExtensionDataService();
                    const providers = await dataService.getExternalInfoProviders(request.params.cardId, request.params.extensionId);

                    response.type('application/json');
                    response.send(providers);
                }),
            },
            {
                path: '/factions/:extensionId',
                method: 'GET',
                handler: asyncHandler(async (request, response) => {
                    const dataService = new ExtensionDataService();
                    const factions = await dataService.getFactions(request.params.extensionId);

                    if (!factions) {
                        response.sendStatus(404);
                        response.send(`Couldn't find extension ${request.params.extensionId}.`);
                    } else {
                        response.type('application/json');
                        response.send(factions);
                    }
                }),
            },
            {
                path: '/rules-symbols',
                method: 'GET',
                handler: asyncHandler(async (request, response) => {
                    const dataService = new ExtensionDataService();
                    // this is just a random userId
                    const costs = await dataService.getRulesSymbols('40e08b1d-16f6-4038-b24e-8347eda79565');

                    response.type('application/json');
                    response.send(costs);
                }),
            },
            {
                path: '/user/:userId/extensions',
                method: 'GET',
                handler: asyncHandler(async (req, res) => {
                    const extensionsService = new ExtensionsService();
                    const extensions = await extensionsService.getUserExtensions(req.params.userId);

                    res.type('application/json');
                    res.send(extensions);
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
