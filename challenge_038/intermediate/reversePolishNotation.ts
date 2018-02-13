class RPNParser {

    private hasNested(expression: string): boolean {

        return /\([^\(\)]+\)/.test(expression);
    }

    private expandNested(nested: string): string {

        console.log(nested);
    }

    public parse(expression: string): string {

        while(this.hasNested(expression)) {

            const nested = expression.match(/\([^\(\)]+\)/)[0];
            expression = expression.replace(nested, this.expandNested(nested));
            console.log(expression);
            break;
        }

        return expression;
    }
}

let parser = new RPNParser();
parser.parse("(a+(b*c))");