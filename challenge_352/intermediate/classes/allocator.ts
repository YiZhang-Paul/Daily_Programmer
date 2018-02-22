import Card from "classes/card";

export default class Allocator {

    private groupTarget(target: string): Map<string, number> {

        let group = new Map<string, number>();

        for(let i = 0; i < target.length; i++) {
            //initialize total value of a target
            if(!group.has(target[i])) {

                group.set(target[i], 0);
            }

            group.set(target[i], group.get(target[i]) + 1);
        }

        return group;
    }

    private getValidCards(target: string, cards: Card[]): Card[] {

        return cards.filter(card => card.hasResource(target));
    }

    private countValidCards(target: string, cards: Card[]): number {

        return this.getValidCards(target, cards).length;
    }

    private setPriority(target: string, cards: Card[]): [string, number][] {

        let groups = this.groupTarget(target);

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
        //always use lowest power level card when possible
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

    public allocate(cards: Card[], target: string): Card[] {

        let allocated: Card[] = [];
        let groups = this.setPriority(target.toUpperCase(), cards);

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

    public canAllocate(cards: Card[], target: string): boolean {

        return this.allocate(cards, target).length > 0;
    }
}