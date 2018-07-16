import { NcExtension } from '@nucard/models/dist';

export class ExtensionsService {
    private _extensions: NcExtension[] = [
        {
            id: 'c059d135-d4b6-493a-b98e-0eba0583d86e',
            name: "Jammerware's A:NR",
            apiVersion: { major: 1, minor: 0, patch: 0 },
            extensionVersion: { major: 1, minor: 0, patch: 0 },
            externalProvidersEndpoint: "https://nucard-netrunner.herokuapp.com/external-providers",
            randomCardEndpoint: "https://nucard-netrunner.herokuapp.com/cards/random",
            rulesSymbolsEndpoint: "https://nucard-netrunner.herokuapp.com/rules-symbols",
            searchEndpoint: "https://nucard-netrunner.herokuapp.com/cards/search",
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
