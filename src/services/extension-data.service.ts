import {
    NcCard,
    NcPrinting,
    NcRulesSymbol,
    NcExternalInfoProvider,
} from '@nucard/models';
import { ExtensionsService } from './extensions.service';
import { HttpService } from './http.service';

export class ExtensionDataService {
    constructor(
        private extensionsService: ExtensionsService = new ExtensionsService(),
        private httpService: HttpService = new HttpService()) { }

    public async getCard(cardId: string, extensionId: string): Promise<NcCard | null> {
        const extension = await this.extensionsService.getExtension(extensionId);

        if (extension) {
            const card = await this.httpService.get<NcCard>(`${extension.endpoints.card}/${cardId}`);
            return card;
        }

        return null;
    }

    public async getExternalInfoProviders(cardId: string, extensionId: string): Promise<NcExternalInfoProvider[] | null> {
        const extension = await this.extensionsService.getExtension(extensionId);

        if (extension) {
            const providers = await this.httpService.get<NcExternalInfoProvider[]>(`${extension.endpoints.externalInfoProviders}/${cardId}`);
            return providers;
        }

        return null;
    }

    public async getRulesSymbols(userId: string): Promise<NcRulesSymbol[]> {
        const extensions = await this.extensionsService.getUserExtensions(userId);
        let symbols: NcRulesSymbol[] = [];

        for (const extension of extensions) {
            const extensionCosts = await this.httpService.get<NcRulesSymbol[]>(`${extension.endpoints.rulesSymbols}`);
            symbols = symbols.concat(extensionCosts);
        }

        return symbols;
    }

    public async getRandomCard(): Promise<NcCard> {
        const extension = await this.extensionsService.getRandomExtension();
        const card = await this.httpService.get<NcCard>(`${extension.endpoints.randomCard}`);

        return card;
    }

    public async search(userId: string, query: string): Promise<NcCard[]> {
        const extensions = await this.extensionsService.getUserExtensions(userId);
        let cards: NcCard[] = [];

        for (const extension of extensions) {
            const extensionCards = await this.httpService.get<NcCard[]>(`${extension.endpoints.search}/${query}`);
            cards = cards.concat(extensionCards);
        }

        return cards;
    }
}
