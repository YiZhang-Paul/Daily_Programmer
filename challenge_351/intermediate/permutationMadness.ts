import IndexTracker from "classes/indexTracker";

function getInput(url: string): Promise<string> {

    return new Promise((resolve, reject) => {

        let xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {

            if(this.readyState === 4 && this.status === 200) {

                resolve(this.responseText);
            }
        };

        xhttp.open("GET", url, true);
        xhttp.send();
    });
}

function getPrograms(input: string): string {

    return input.match(/^.+(?=\r|\n)/)[0];
}

function getMoves(input: string): string[] {

    return input.split(",").map(move => move.trim());
}

function formatInputs(input: string): string[] {

    const programs = getPrograms(input);

    return [programs, ...getMoves(input.slice(programs.length))];
}

function dance(input: string): string {

    let inputs = formatInputs(input);
    let tracker = new IndexTracker(inputs[0]);

    for(let i = 1; i < inputs.length; i++) {

        tracker.processMove(inputs[i]);
    }

    return tracker.items;
}

//challenge input
console.log(`%cChallenge Input:`, "color : red;");

let input = `abcde
             s1,x3/4,p4/1`;
console.log(dance(input));

input = `dbagcfe
         s4,s5,x5/3,x5/6,s5,s3,x0/3,x3/6,x6/0,x2/3,x3/5,s5,s5,s5,s1,s5,s3,s3,x2/3,x1/0,s1,s1,s1,s4,x1/3,x4/2,x5/1,x6/0,s2,x2/1`;
console.log(dance(input));

getInput("https://pastebin.com/raw/FnZ9tPsf").then(input => {

    const time = new Date().getTime();
    console.log(dance(input));
    console.log(`%cTime Spent: %c${new Date().getTime() - time}ms`, "color : yellow;", "color : violet;");
});

getInput("https://pastebin.com/raw/2wA04VUR").then(input => {

    const time = new Date().getTime();
    console.log(dance(input));
    console.log(`%cTime Spent: %c${new Date().getTime() - time}ms`, "color : yellow;", "color : violet;");
});