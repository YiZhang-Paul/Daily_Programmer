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

getInput("input.txt").then(input => {

    const time = new Date().getTime();

    let lines = input.split("\n").map(line => line.trim());
    const [, totalWords, totalCases] = parseNumbers(lines[0]);
    let words = lines.slice(1, totalWords + 1);
    let cases = lines.slice(1 + totalWords);

    console.log(`%cTime Spent: %c${new Date().getTime() - time}ms`, "color : yellow;", "color : violet;");

}).catch(error => {console.log(error);});