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

class CardReader {

    private getRank(rank: string): number {

        if(/\d/.test(rank)) {

            return Number.parseInt(rank);
        }

        return Object.freeze({

            "A" : 1, "T" : 10, "J" : 11, "Q" : 12, "K" : 13

        })[rank];
    }

    public read(cards: string): Card[] {

        let result: Card[] = [];

        cards.match(/\S+/g).forEach(match => {

            const rank = this.getRank(match[0]);
            result.push(new Card(rank, match[1]));
        });

        return result;
    }
}

class PokerHandSolver {

    public solve(cards: Card[]): string {


    }
}

let cards = new CardReader().read("TH JH QH KH AH");
let solver = new PokerHandSolver();

console.log(solver.solve(cards));