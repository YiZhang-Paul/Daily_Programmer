class RabbitTracker {

    private _totalBorned: number = 0;

    public maleTracker: Map<number, number[]>;
    public femaleTracker: Map<number, number[]>;

    constructor(males: number, females: number) {

        this.maleTracker = this.createTracker(males);
        this.femaleTracker = this.createTracker(females);
        console.log(this.totalAlive);
    }

    get totalBorned(): number {

        return this._totalBorned;
    }

    get totalAlive(): number {

        let alive: number = 0;

        [this.maleTracker, this.femaleTracker].forEach(tracker => {

            tracker.forEach(months => {

                alive += this.sum(months);
            });
        });

        return alive;
    }

    sum(array: number[]): number {

        return array.reduce((sum, current) => sum + current, 0);
    }

    createTracker(rabbits: number): Map<number, number[]> {

        let tracker = new Map<number, number[]>();

        for(let i = 0; i < 8; i++) {

            tracker.set(i, new Array<number>(12).fill(0));
        }

        tracker.get(0)[2] = rabbits;

        return tracker;
    }
}

let tracker = new RabbitTracker(2, 4);