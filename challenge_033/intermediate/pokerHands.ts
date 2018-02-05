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

    private cards: Card[];
    private ranks: Map<number, number>;
    private suits: Map<string, number>;

    constructor(cards: Card[]) {

        this.cards = cards;
        this.ranks = this.countRanks(cards);
        this.suits = this.countSuits(cards);
    }

    private countRanks(cards: Card[]): Map<number, number> {

        let ranks = new Map<number, number>();

        cards.forEach(card => {

            if(!ranks.has(card.rank)) {

                ranks.set(card.rank, 0);
            }

            ranks.set(card.rank, ranks.get(card.rank) + 1);
        });

        return ranks;
    }

    private countSuits(cards: Card[]): Map<string, number> {

        let suits = new Map<string, number>();

        cards.forEach(card => {

            if(!suits.has(card.suit)) {

                suits.set(card.suit, 0);
            }

            suits.set(card.suit, suits.get(card.suit) + 1);
        });

        return suits;
    }

    private sort(cards: Card[]): Card[] {

        return cards.slice().sort((a, b) => a.rank - b.rank);
    }

    private isConsecutive(cards: Card[]): boolean {

        let sortedCards = this.sort(cards);

        return sortedCards.slice(0, -1).every((card, index) => {

            return sortedCards[index + 1].rank - card.rank === 1;
        });
    }

    private hasRank(rank: number): boolean {

        return this.cards.some(card => card.rank === rank);
    }

    private hasGroupOfSize(size: number): boolean {

        return Array.from(this.ranks).some(pair => pair[1] === size);
    }

    private isFlush(): boolean {

        return this.suits.size === 1;
    }

    private isStraight(): boolean {

        if(this.hasRank(1) && this.hasRank(13)) {

            let highRankCards = this.sort(this.cards).slice(1);

            return this.isConsecutive(highRankCards);
        }

        return this.isConsecutive(this.cards);
    }

    private isThreeOfAKind(): boolean {

        return this.ranks.size === 3 && this.hasGroupOfSize(3);
    }

    private isFourOfAKind(): boolean {

        return this.hasGroupOfSize(4);
    }

    private isOnePair(): boolean {

        return this.ranks.size === 4 && this.hasGroupOfSize(2);
    }

    private isTwoPair(): boolean {

        return this.ranks.size === 3 && this.hasGroupOfSize(2);
    }

    private isFullHouse(): boolean {

        return this.ranks.size === 2 && this.hasGroupOfSize(3);
    }

    private isStraightFlush(): boolean {

        return this.isFlush() && this.isStraight();
    }

    private isRoyalFlush(): boolean {

        return this.isStraightFlush() && this.hasRank(1) && this.hasRank(13);
    }

    public solve(): string {

        if(this.isStraightFlush()) {

            return this.isRoyalFlush() ? "Royal Flush" : "Straight Flush";
        }
        else if(this.isFlush()) {

            return "Flush";
        }
        else if(this.isStraight()) {

            return "Straight";
        }
        else if(this.isThreeOfAKind()) {

            return "Three of a Kind";
        }
        else if(this.isFourOfAKind()) {

            return "Four of a Kind";
        }
        else if(this.isFullHouse()) {

            return "Full House";
        }
        else if(this.isOnePair()) {

            return "One Pair";
        }
        else if(this.isTwoPair()) {

            return "Two Pair";
        }
        else {

            return "High Card";
        }
    }
}
//challenge input
console.log(`%cChallenge Input:`, "color : red;");
let reader = new CardReader();
let solver = new PokerHandSolver(reader.read("TH JH QH KH AH"));
console.log(solver.solve());

solver = new PokerHandSolver(reader.read("TH JH QH KH 9H"));
console.log(solver.solve());

solver = new PokerHandSolver(reader.read("TH TS TC TD AH"));
console.log(solver.solve());

solver = new PokerHandSolver(reader.read("TH TS TC AD AH"));
console.log(solver.solve());

solver = new PokerHandSolver(reader.read("TH JH QH KH 2H"));
console.log(solver.solve());

solver = new PokerHandSolver(reader.read("TH JH QH KH AS"));
console.log(solver.solve());

solver = new PokerHandSolver(reader.read("TH TD TS QH KH"));
console.log(solver.solve());

solver = new PokerHandSolver(reader.read("TH TD QH QD AS"));
console.log(solver.solve());

solver = new PokerHandSolver(reader.read("TH TD QH KH AH"));
console.log(solver.solve());

solver = new PokerHandSolver(reader.read("9D TS JH QC AH"));
console.log(solver.solve());