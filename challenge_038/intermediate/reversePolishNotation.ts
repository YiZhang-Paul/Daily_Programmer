class RPNParser {

    private canExpand(input: string): boolean {

        return /\([^\(\)]+\)/.test(input);
    }

    private removeBrackets(input: string): string {

        return input.replace(/[\[\]\(\)]/g, "");
    }

    private expand(toExpand: string): string {

        let items = toExpand.match(/\[[^\[\]]+\]|[^\[\]\(\)\s]/g);
        let expanded = "";

        for(let i = 0; i < items.length; i++) {

            if(/[a-zA-Z]|!/.test(items[i])) {

                expanded += items[i];

                continue;
            }

            expanded += items[i + 1] + items[i++];
        }

        return `[${this.removeBrackets(expanded)}]`;
    }

    public parse(input: string): string {

        while(this.canExpand(input)) {

            const toExpand = input.match(/\([^\(\)]+\)/)[0];
            input = input.replace(toExpand, this.expand(toExpand));
        }

        return this.removeBrackets(input);
    }
}

//challenge input
console.log(`%cChallenge Input:`, "color : red;");
let parser = new RPNParser();
let inputs = ["(a+(b*c))", "((a+b)*(z+x))", "((a+t)*((b+(a+c)) ^ (c+d)))"];

inputs.forEach(input => {

    console.log(`%c${input} -> %c${parser.parse(input)}`, "color : yellow;", "color : violet;");
});