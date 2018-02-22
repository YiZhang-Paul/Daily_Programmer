import Card from "classes/card";

export default class Allocator {

    private groupDemands(demands: string): Map<string, number> {

        let groups = new Map<string, number>();

        for(let i = 0; i < demands.length; i++) {
            //initialize total value of a demanded resource
            if(!groups.has(demands[i])) {

                groups.set(demands[i], 0);
            }

            groups.set(demands[i], groups.get(demands[i]) + 1);
        }

        return groups;
    }

    private getValidCards(demand: string, cards: Card[]): Card[] {

        return cards.filter(card => card.hasResource(demand));
    }

    private countValidCards(demand: string, cards: Card[]): number {

        return this.getValidCards(demand, cards).length;
    }

    private setPriority(demands: string, cards: Card[]): [string, number][] {

        let groups = this.groupDemands(demands);

        return Array.from(groups).sort((a, b) => {
            //resources with higher demand have higher priority
            if(a[1] !== b[1]) {

                return b[1] - a[1];
            }
            //resources with same demand but lower availability have higher priority
            return this.countValidCards(a[0], cards) - this.countValidCards(b[0], cards);
        });
    }

    private getCardsToUse(collection: Card[], total: number): Card[] {
        //always use lowest level card when possible
        return collection.sort((a, b) => a.level - b.level).slice(0, total);
    }

    private addCards(collection: Card[], toAdd: Card[]): Card[] {

        return [...collection, ...toAdd];
    }

    private removeCards(collection: Card[], toRemove: Card[]): Card[] {

        let cards = new Set<Card>(collection);

        toRemove.forEach(card => {

            cards.delete(card);
        });

        return Array.from(cards);
    }

    public allocate(cards: Card[], demands: string): Card[] {

        let allocated: Card[] = [];
        let groups = this.setPriority(demands.toUpperCase(), cards);
        //allocate cards for each group from highest to lowest priority
        for(let i = 0; i < groups.length; i++) {

            let validCards = this.getValidCards(groups[i][0], cards);
            //allocation fails when not enough cards available
            if(groups[i][1] > validCards.length) {

                return new Array<Card>();
            }

            let cardsUsed = this.getCardsToUse(validCards, groups[i][1]);
            allocated = this.addCards(allocated, cardsUsed);
            cards = this.removeCards(cards, cardsUsed);
        }

        return allocated;
    }

    public canAllocate(cards: Card[], demands: string): boolean {

        return this.allocate(cards, demands).length > 0;
    }
}