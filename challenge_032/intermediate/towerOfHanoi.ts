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
        this.putDisks();
    }

    get isSolved(): boolean {

        return this.rods[2].size === this.disks.length;
    }

    private getDisks(total: number): number[] {

        let disks = new Array<number>(total).fill(0);

        return disks.map((disk, index) => index + 1);
    }

    private getRods(): Stack<number>[] {

        let rods:Stack<number>[] = [];

        for(let i = 0; i < 3; i++) {

            rods[i] = new Stack<number>();
        }

        return rods;
    }

    private putDisks(): void {

        this.rods[0].pushList(this.disks.reverse());
    }
}

let tower = new HanoiTower(6);
console.log(tower);