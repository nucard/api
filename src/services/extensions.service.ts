import { NcExtension } from '@nucard/models';

export class ExtensionsService {
    private _extensions: NcExtension[] = [
        {
            id: 'c059d135-d4b6-493a-b98e-0eba0583d86e',
            name: "Jammerware's A:NR",
            logo: "https://imgur.com/hTdlsRN.png",
            gameName: "Android: Netrunner",
            apiVersion: { major: 1, minor: 0, patch: 0 },
            extensionVersion: { major: 1, minor: 0, patch: 0 },
            endpoints: {
                card: "https://nucard-netrunner.herokuapp.com/cards",
                externalInfoProviders: "https://nucard-netrunner.herokuapp.com/external-info-providers",
                factions: "https://nucard-netrunner.herokuapp.com/factions",
                randomCard: "https://nucard-netrunner.herokuapp.com/cards/random",
                rulesSymbols: "https://nucard-netrunner.herokuapp.com/rules-symbols",
                search: "https://nucard-netrunner.herokuapp.com/cards/search",
            },
        },
        {
            id: '177bf6a0-3eec-412c-b114-cf9cc47c295e',
            name: "Jammerware's Hearthstone",
            logo: "https://i.imgur.com/BOYXukS.png",
            gameName: "Hearthstone",
            apiVersion: { major: 1, minor: 0, patch: 0 },
            extensionVersion: { major: 1, minor: 0, patch: 0 },
            endpoints: {
                card: "https://nucard-hearthstone.herokuapp.com/card",
                externalInfoProviders: "https://nucard-hearthstone.herokuapp.com/external-info-providers",
                factions: "https://nucard-hearthstone.herokuapp.com/factions",
                randomCard: "https://nucard-hearthstone.herokuapp.com/card/random",
                search: "https://nucard-hearthstone.herokuapp.com/cards/search",
            },
        },
    ];

    public async getExtension(extensionId: string): Promise<NcExtension | undefined> {
        return Promise.resolve(this._extensions.find(e => e.id === extensionId));
    }

    public async getExtensions(): Promise<NcExtension[]> {
        return Promise.resolve(this._extensions);
    }

    public async getRandomExtension(userId: string): Promise<NcExtension> {
        const extensions = await this.getUserExtensions(userId);
        const index = Math.floor(Math.random() * extensions.length);
        const ext = extensions[index];

        return Promise.resolve(ext);
    }

    public async getUserExtensions(userId: string): Promise<NcExtension[]> {
        return this.getExtensions();
    }
}
