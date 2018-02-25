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

//split test case into groups, e.g. a(abc)d -> [a], [a, b, c], [d]
function splitTestCase(testCase: string): string[][] {

    return testCase.match(/\w|\(\w+\)/g).map(group => {

        return group.match(/\w/g);
    });
}

function countMatchingWords(words: string[], testCase: string): number {

    let matches = words.slice();

    splitTestCase(testCase).forEach((group, index) => {

        let letters = new Set(group);
        /**
         * remove all words whose letter on current index
         * does not match corresponding letters in test case
         */
        matches = matches.filter(word => {

            return letters.has(word[index]);
        });
    });

    return matches.length;
}

function getResult(input: string): string {

    let inputs = input.split("\n").map(line => line.trim());
    const totalWords = parseNumbers(inputs[0])[1];
    let words = inputs.slice(1, totalWords + 1);
    let cases = inputs.slice(1 + totalWords);

    return cases.map((testCase, index) => {

        return `Case #${index + 1}: ${countMatchingWords(words, testCase)}`;

    }).join("\n");
}

//challenge input
console.log(`%cChallenge Input:`, "color : red;");
let urls = ["input_sample.txt", "input_small.txt", "input_large.txt"];

for(let i = 0; i < urls.length; i++) {

    getInput(urls[i]).then(input => {

        const time = new Date().getTime();

        console.log(getResult(input));

        console.log(`%cTime Spent: %c${new Date().getTime() - time}ms`, "color : yellow;", "color : violet;");

    }).catch(error => {console.log(error);});
}