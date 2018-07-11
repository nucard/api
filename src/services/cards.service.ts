import {
    NcCard,
    NcPrinting,
} from '@nucard/models';
import { ExtensionsService } from './extensions.service';
import { HttpService } from './http.service';

export class CardsService {
    constructor(
        private extensionsService: ExtensionsService = new ExtensionsService(),
        private httpService: HttpService = new HttpService()) { }

    public async query(userId: string, query: string): Promise<NcCard[]> {
        const extensions = await this.extensionsService.getUserExtensions(userId);
        let cards: NcCard[] = [];

        for (const extension of extensions) {
            const extensionCards = await this.httpService.get<NcCard[]>(`${extension.queryEndpoint}/${query}`);

            cards = cards.concat(extensionCards);
        }

        return cards;
    }

    public getRandomCard(): Promise<NcCard> {
        return new Promise((resolve, reject) => {
            const extension = this.extensionsService.getRandomExtension();
            resolve(new NcCard());
        })
    }
}
