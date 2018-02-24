import Trie from "classes/trie";

function getInput(url: string): Promise<string> {

    return new Promise((resolve, reject) => {

        let xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {

            if(this.readyState === 4 && this.status === 200) {

                resolve(this.responseText.trim());
            }
        };

        xhttp.open("GET", url, true);
        xhttp.send();
    });
}

function parseNumbers(input: string): number[] {

    return input.match(/\d+/g).map(match => Number.parseInt(match));
}

function countMatches(words: string[], testCase: string): number {

    let trie = new Trie([testCase]);

    return words.filter(word => trie.contains(word)).length;
}

function getResult(input: string): string {

    let inputs = input.split("\n").map(line => line.trim());
    const totalWords = parseNumbers(inputs[0])[1];
    let words = inputs.slice(1, totalWords + 1);
    let cases = inputs.slice(1 + totalWords);

    return cases.map((testCase, index) => {

        return `Case #${index + 1}: ${countMatches(words, testCase)}`;

    }).join("\n");
}

getInput("input.txt").then(input => {

    const time = new Date().getTime();

    console.log(getResult(input));

    console.log(`%cTime Spent: %c${new Date().getTime() - time}ms`, "color : yellow;", "color : violet;");

}).catch(error => {console.log(error);});