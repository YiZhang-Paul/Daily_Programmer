class Stack<T> {

    private items: T[] = [];

    get size(): number {

        return this.items.length;
    }

    get isEmpty(): boolean {

        return this.size === 0;
    }

    public peek(): T {

        return this.isEmpty ? null : this.items.slice(-1)[0];
    }

    public push(item: T): void {

        this.items.push(item);
    }

    public pushList(list: T[]): void {

        list.forEach(item => {

            this.push(item);
        });
    }

    public pop(): T {

        return this.isEmpty ? null : this.items.pop();
    }
}

class HanoiTower {

    private disks: number[];
    private rods: Stack<number>[];

    constructor(total: number) {

        this.disks = this.getDisks(total);
        this.rods = this.getRods();
        this.insertDisks();
    }

    get isSolved(): boolean {

        return this.rods.slice(-1)[0].size === this.disks.length;
    }

    private getDisks(total: number): number[] {

        let disks = new Array<number>(total).fill(0);

        return disks.map((disk, index) => index + 1);
    }

    private getRods(): Stack<number>[] {

        let rods: Stack<number>[] = [];

        for(let i = 0; i < 3; i++) {

            rods[i] = new Stack<number>();
        }

        return rods;
    }

    private insertDisks(): void {

        this.rods[0].pushList(this.disks.reverse());
    }

    private findSourceAndDestination(rod1: Stack<number>, rod2: Stack<number>): Stack<number>[] {

        let source: Stack<number>, destination: Stack<number>;

        if(rod1.isEmpty || rod2.isEmpty) {

            source = rod1.isEmpty ? rod2 : rod1;
            destination = rod1.isEmpty ? rod1 : rod2;
        }
        else {

            source = rod1.peek() < rod2.peek() ? rod1 : rod2;
            destination = rod1.peek() < rod2.peek() ? rod2 : rod1;
        }

        return [source, destination];
    }

    private moveDisk(source: Stack<number>, destination: Stack<number>): void {

        destination.push(source.pop());
    }

    private tryMoveDisk(rod1: Stack<number>, rod2: Stack<number>): void {

        if(rod1.isEmpty && rod2.isEmpty) {

            throw "Illegal Move.";
        }

        let [source, destination] = this.findSourceAndDestination(rod1, rod2);
        this.moveDisk(source, destination);
    }

    private getAffectedRods(step: number): Stack<number>[] {

        let indexes = this.disks.length % 2 === 0 ?
            [[0, 1], [0, 2], [1, 2]][step] :
            [[0, 2], [0, 1], [1, 2]][step];

        return [this.rods[indexes[0]], this.rods[indexes[1]]];
    }

    public solve(): number {

        let steps = 0;

        while(!this.isSolved) {

            let [rod1, rod2] = this.getAffectedRods(steps++ % 3);
            this.tryMoveDisk(rod1, rod2);
        }

        return steps;
    }
}

//challenge input
console.log(`%cChallenge Input:`, "color : red;");
let tower = new HanoiTower(3);
console.log(`3 Disks -> %c${tower.solve()} Steps`, "color : yellow;");
tower = new HanoiTower(6);
console.log(`6 Disks -> %c${tower.solve()} Steps`, "color : yellow;");
tower = new HanoiTower(10);
console.log(`10 Disks -> %c${tower.solve()} Steps`, "color : yellow;");