import { NcExtension } from '@nucard/models/dist';

export class ExtensionsService {
    private _extensions: NcExtension[] = [
        // {
        //     id: '5fa3f8ed-04ee-4f8b-a888-621b14383128',
        //     name: "Jammerware's Wild 'n' Crazy MtG Extension",
        //     apiVersion: { major: 1, minor: 0, patch: 0 },
        //     extensionVersion: { major: 1, minor: 0, patch: 0 },
        //     queryEndpoint: "https://nucard-mtg.herokuapp.com/cards/query",
        //     randomCardEndpoint: "https://nucard-mtg.herokuapp.com/cards/random",
        //     raritiesEndpoint: "https://nucard-mtg.herokuapp.com/rarities",
        //     rulesSymbolsEndpoint: "https://nucard-mtg.herokuapp.com/rules-symbols",
        // },
        {
            id: 'c059d135-d4b6-493a-b98e-0eba0583d86e',
            name: "Jammerware's A:NR",
            apiVersion: { major: 1, minor: 0, patch: 0 },
            extensionVersion: { major: 1, minor: 0, patch: 0 },
            queryEndpoint: "https://nucard-netrunner.herokuapp.com/cards/search",
            randomCardEndpoint: "https://nucard-netrunner.herokuapp.com/cards/random",
            raritiesEndpoint: "https://nucard-netrunner.herokuapp.com/rarities",
            rulesSymbolsEndpoint: "https://nucard-netrunner.herokuapp.com/rules-symbols",
        },
    ];

    public async getExtensions(): Promise<NcExtension[]> {
        return new Promise<NcExtension[]>((resolve, reject) => {
            resolve(this._extensions);
        });
    }

    public async getRandomExtension(): Promise<NcExtension> {
        return new Promise<NcExtension>((resolve, reject) => {
            const index = Math.floor(Math.random() * this._extensions.length);
            const ext = this._extensions[index];
            resolve(ext);
        });
    }

    public async getUserExtensions(userId: string): Promise<NcExtension[]> {
        return this.getExtensions();
    }
}
