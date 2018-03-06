function readText(input: string): string[] {

    return input.split("\n").map(text => text.trim());
}

function getDistance(text1: string, text2: string): number {

    let distance = 0;

    for(let i = 0; i < text1.length; i++) {

        if(text1[i] !== text2[i]) {

            distance++;
        }
    }

    return distance;
}

let input = `ATCAATATCAA
             ATTAAATAACT
             AATCCTTAAAC
             CTACTTTCTTT
             TCCCATCCTTT
             ACTTCAATATA`;

let text = readText(input);

console.log(getDistance(text[0], text[0]));
console.log(getDistance(text[0], text[1]));