import { NcExtension } from '@nucard/models';

export class ExtensionsService {
    private _extensions: NcExtension[] = [{
        id: '5fa3f8ed-04ee-4f8b-a888-621b14383128',
        name: "Jammerware's Wild 'n' Crazy MtG Extension",
        apiVersion: { major: 1, minor: 0, patch: 0 },
        extensionVersion: { major: 1, minor: 0, patch: 0 },
        costsEndpoint: "https://nucard-mtg.herokuapp.com/costs",
        queryEndpoint: "https://nucard-mtg.herokuapp.com/cards/query",
        randomCardEndpoint: "https://nucard-mtg.herokuapp.com/cards/random",
        raritiesEndpoint: "https://nucard-mtg.herokuapp.com/rarities",
    }];

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
