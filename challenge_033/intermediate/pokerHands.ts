class Card {

    private _rank: number;
    private _label: string;
    private _suit: string;

    constructor(rank: number, label: string, suit: string) {

        this._rank = rank;
        this._label = label;
        this._suit = suit;
    }

    get rank(): number {

        return this._rank;
    }

    get label(): string {

        return this._label;
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
            result.push(new Card(rank, match[0], match[1]));
        });

        return result;
    }
}

class CardCounter {

    public countRanks(cards: Card[]): Map<number, number> {

        let ranks = new Map<number, number>();

        cards.forEach(card => {

            if(!ranks.has(card.rank)) {

                ranks.set(card.rank, 0);
            }

            ranks.set(card.rank, ranks.get(card.rank) + 1);
        });

        return ranks;
    }

    public countLabels(cards: Card[]): Map<string, number> {

        let labels = new Map<string, number>();

        cards.forEach(card => {

            if(!labels.has(card.label)) {

                labels.set(card.label, 0);
            }

            labels.set(card.label, labels.get(card.label) + 1);
        });

        return labels;
    }

    public countSuits(cards: Card[]): Map<string, number> {

        let suits = new Map<string, number>();

        cards.forEach(card => {

            if(!suits.has(card.suit)) {

                suits.set(card.suit, 0);
            }

            suits.set(card.suit, suits.get(card.suit) + 1);
        });

        return suits;
    }
}

class PokerHandSolver {

    private cards: Card[];
    private ranks: Map<number, number>;
    private labels: Map<string, number>;
    private suits: Map<string, number>;

    constructor(cards: Card[], counter: CardCounter) {

        this.cards = cards;
        this.ranks = counter.countRanks(cards);
        this.labels = counter.countLabels(cards);
        this.suits = counter.countSuits(cards);
    }

    private sortCard(cards: Card[]): Card[] {

        return cards.slice().sort((a, b) => a.rank - b.rank);
    }

    private sortLabel(): [string, number][] {

        return Array.from(this.labels).sort((a, b) => a[1] - b[1]);
    }

    private hasRank(rank: number): boolean {

        return this.cards.some(card => card.rank === rank);
    }

    private hasGroupOfSize(size: number): boolean {

        return Array.from(this.ranks).some(pair => pair[1] === size);
    }

    private isConsecutive(cards: Card[]): boolean {

        let sortedCards = this.sortCard(cards);

        return sortedCards.slice(0, -1).every((card, index) => {

            return sortedCards[index + 1].rank - card.rank === 1;
        });
    }

    private isFlush(): boolean {

        return this.suits.size === 1;
    }

    private isStraight(): boolean {

        let cards = this.cards;

        if(this.hasRank(1) && this.hasRank(13)) {

            cards = this.sortCard(cards).slice(1);
        }

        return this.isConsecutive(cards);
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

        return this.isStraight() && this.isFlush();
    }

    private isRoyalFlush(): boolean {

        return this.isStraightFlush() && this.hasRank(1) && this.hasRank(13);
    }

    private showFlush(): string {

        return `Flush: ${this.cards[0].suit}`;
    }

    private showStraight(): string {

        let cards = this.sortCard(this.cards);
        const rotated = this.hasRank(1) && this.hasRank(13);
        const low = rotated ? "T" : cards[0].label;
        const high = rotated ? "A" : cards.slice(-1)[0].label;

        return `Straight: ${low} to ${high}`;
    }

    private showThreeOfAKind(): string {

        return `Three of a Kind: ${this.sortLabel().slice(-1)[0][0]}`;
    }

    private showFourOfAKind(): string {

        return `Four of a Kind: ${this.sortLabel().slice(-1)[0][0]}`;
    }

    private showOnePair(): string {

        return `One Pair: ${this.sortLabel().slice(-1)[0][0]}`;
    }

    private showTwoPair(): string {

        let labels = this.sortLabel();

        return `Two Pair: ${labels[1][0]} & ${labels.slice(-1)[0][0]}`;
    }

    private showFullHouse(): string {

        let labels = this.sortLabel();

        return `Full House: ${labels[1][0]} Over ${labels[0][0]}`;
    }

    private showStraightFlush(): string {

        let cards = this.sortCard(this.cards);
        const low = cards[0].label;
        const high = cards.slice(-1)[0].label;

        return `Straight Flush: ${low} to ${high}, ${this.cards[0].suit}`;
    }

    private showRoyalFlush(): string {

        return `Royal Flush: ${this.cards[0].suit}`;
    }

    public solve(): string {

        let hands = [

            "RoyalFlush", "StraightFlush", "Straight",
            "Flush", "FullHouse", "ThreeOfAKind",
            "FourOfAKind", "OnePair", "TwoPair"
        ];

        for(let i = 0; i < hands.length; i++) {

            if(this[`is${hands[i]}`]()) {

                return this[`show${hands[i]}`]();
            }
        }

        return "High Card";
    }
}

//challenge input
console.log(`%cChallenge Input:`, "color : red;");
let reader = new CardReader();
let counter = new CardCounter();
let cards = [

    "TH JH QH KH AH",
    "TH JH QH KH 9H",
    "TH TS TC TD AH",
    "TH TS TC AD AH",
    "TH JH QH KH 2H",
    "TH JH QH KH AS",
    "TH TD TS QH KH",
    "TH TD QH QD AS",
    "TH TD QH KH AH",
    "9D TS JH QC AH"
];

cards.forEach(set => {

    let solver = new PokerHandSolver(reader.read(set), counter);
    console.log(`%c${set}: %c${solver.solve()}`, "color : yellow;", "color : violet;");
});