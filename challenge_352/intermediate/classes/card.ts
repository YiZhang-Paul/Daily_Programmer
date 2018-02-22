export default class Card {

    private _resources = new Set<string>();

    constructor(resources: string) {

        this.addResources(resources);
    }
    //indicate total number of resources provided by card
    get level(): number {

        return this._resources.size;
    }

    private format(resource: string): string {

        return resource.trim().toUpperCase();
    }

    private addResources(resources: string): void {

        resources.match(/[A-Za-z]/g).forEach(resource => {

            this._resources.add(this.format(resource));
        });
    }

    public hasResource(resource: string): boolean {

        return this._resources.has(this.format(resource));
    }
}