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

    private prioritizeTarget(target: string, cards: Card[]): [string, number][] {

        let group = this.groupTarget(target);

        return Array.from(group).sort((a, b) => {
            //resources with higher demand have higher priority
            if(a[1] !== b[1]) {

                return b[1] - a[1];
            }
            //resources with same demand but lower availability have higher priority
            return this.countValidCards(a[0], cards) - this.countValidCards(b[0], cards);
        });
    }

    public canAllocate(cards: Card[], target: string): boolean {

        let prioritized = this.prioritizeTarget(target.toUpperCase(), cards);
        console.log(prioritized);
    }
}