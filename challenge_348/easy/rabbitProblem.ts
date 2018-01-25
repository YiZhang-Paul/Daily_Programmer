class RabbitTracker {

    private _totalBorned: number = 0;
    private _maleTracker: Map<number, number[]>;
    private _femaleTracker: Map<number, number[]>;

    constructor(males: number, females: number) {

        this._maleTracker = this.createTracker(males);
        this._femaleTracker = this.createTracker(females);
        this._totalBorned += males + females;
    }

    get totalBorned(): number {

        return this._totalBorned;
    }

    get totalAlive(): number {

        let alive: number = 0;

        [this._maleTracker, this._femaleTracker].forEach(tracker => {

            tracker.forEach(months => {

                alive += this.sum(months);
            });
        });

        return alive;
    }

    get totalDeath(): number {

        return this.totalBorned - this.totalAlive;
    }

    sum(array: number[]): number {

        return array.reduce((total, current) => total + current, 0);
    }

    createTracker(rabbits: number): Map<number, number[]> {

        let tracker = new Map<number, number[]>();

        for(let i = 0; i < 8; i++) {

            tracker.set(i, new Array<number>(12).fill(0));
        }

        tracker.get(0)[2] = rabbits;

        return tracker;
    }

    isFertile(month: number, year: number): boolean {

        return year >= 1 ? true : month >= 4;
    }

    getOffspring(): number {

        let offspring: number = 0;

        this._femaleTracker.forEach((months, year) => {

            for(let i = 0; i < months.length; i++) {

                if(this.isFertile(i, year)) {

                    offspring += months[i] * 14;
                }
            }
        });

        return offspring;
    }

    trackOffspring(): void {

        const offspring = this.getOffspring();
        this._totalBorned += offspring;
        this._maleTracker.get(0).unshift(offspring / 14 * 5);
        this._femaleTracker.get(0).unshift(offspring / 14 * 9);
    }

    trackDeath(tracker: Map<number, number[]>): void {

        tracker.get(tracker.size - 1).pop();
    }

    trackAge(): void {

        [this._maleTracker, this._femaleTracker].forEach(tracker => {

            this.trackDeath(tracker);

            tracker.forEach((months, year) => {

                if(tracker.has(year + 1)) {

                    tracker.get(year + 1).unshift(months.pop());
                }
            });
        });
    }

    trackMonth(): void {

        this.trackOffspring();
        this.trackAge();
    }
}

function checkDominate(males: number, females: number, goal: number): number[] {

    let tracker = new RabbitTracker(males, females);
    let months: number = 0;

    while(tracker.totalAlive < goal) {

        tracker.trackMonth();
        months++;
    }

    return [months, tracker.totalDeath];
}

function showResult(results: number[]) {

    console.log(
        `%cIt Takes %c${results[0]} %cMonths to Dominate Earth; %c${results[1]} %cRabbits Died in the Process.`,
        "color : violet",
        "color : yellow",
        "color : violet",
        "color : yellow",
        "color : violet"
    );
}

//challenge & bonus input
console.log(`%cChallenge & Bonus `, "color : red;");
showResult(checkDominate(2, 4, 1000000000));
showResult(checkDominate(2, 4, 15000000000));