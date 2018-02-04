class Card {

    private _rank: number;
    private _suit: string;

    constructor(rank: number, suit: string) {

        this._rank = rank;
        this._suit = suit;
    }

    get rank(): number {

        return this._rank;
    }

    get suit(): string {

        return this._suit;
    }
}

class PokerHandSolver {

    private cards: Card[];

    constructor(cards: string) {

        this.cards = this.readCards(cards);
    }

    readRank(rank: string): number {

        if(/\d/.test(rank)) {

            return Number.parseInt(rank);
        }

        return Object.freeze({

            "A" : 1, "T" : 10, "J" : 11, "Q" : 12, "K" : 13

        })[rank];
    }

    readCards(cards: string): Card[] {

        let result: Card[] = [];

        cards.match(/\S+/g).forEach(match => {

            const rank = this.readRank(match[0]);
            result.push(new Card(rank, match[1]));
        });

        return result;
    }
}

let solver = new PokerHandSolver("TH JH QH KH AH");