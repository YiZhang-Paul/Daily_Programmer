function readText(input: string): string[] {

    return input.split("\n").map(text => text.trim());
}

//calculate Hamming distance between two strings
function getDistance(text1: string, text2: string): number {

    return Array.prototype.filter.call(text1, (character, index) => {

        return text2[index] !== character;

    }).length;
}

//calculate average distance between a string with other strings in the same group
function getAverageDistance(texts: string[], index: number): number {

    return texts.reduce((distance, text) => {

        return distance + getDistance(text, texts[index]);

    }, 0) / (texts.length - 1);
}

function findCenter(input: string): string {

    let texts = readText(input);
    let center = "";

    for(let i = 0, distance = 0; i < texts.length; i++) {

        const average = getAverageDistance(texts, i);

        if(distance === 0 || average < distance) {

            distance = average;
            center = texts[i];
        }
    }

    return center;
}

//challenge input
console.log(`%cChallenge Input:`, "color : red;");

const time = new Date().getTime();

let input = `ATCAATATCAA
             ATTAAATAACT
             AATCCTTAAAC
             CTACTTTCTTT
             TCCCATCCTTT
             ACTTCAATATA`;

console.log(findCenter(input));

input = `CTCCATCACAC
         AATATCTACAT
         ACATTCTCCAT
         CCTCCCCACTC`;

console.log(findCenter(input));

input = `AACACCCTATA
         CTTCATCCACA
         TTTCAATTTTC
         ACAATCAAACC
         ATTCTACAACT
         ATTCCTTATTC
         ACTTCTCTATT
         TAAAACTCACC
         CTTTTCCCACC
         ACCTTTTCTCA
         TACCACTACTT`;

console.log(findCenter(input));

input = `ACAAAATCCTATCAAAAACTACCATACCAAT
         ACTATACTTCTAATATCATTCATTACACTTT
         TTAACTCCCATTATATATTATTAATTTACCC
         CCAACATACTAAACTTATTTTTTAACTACCA
         TTCTAAACATTACTCCTACACCTACATACCT
         ATCATCAATTACCTAATAATTCCCAATTTAT
         TCCCTAATCATACCATTTTACACTCAAAAAC
         AATTCAAACTTTACACACCCCTCTCATCATC
         CTCCATCTTATCATATAATAAACCAAATTTA
         AAAAATCCATCATTTTTTAATTCCATTCCTT
         CCACTCCAAACACAAAATTATTACAATAACA
         ATATTTACTCACACAAACAATTACCATCACA
         TTCAAATACAAATCTCAAAATCACCTTATTT
         TCCTTTAACAACTTCCCTTATCTATCTATTC
         CATCCATCCCAAAACTCTCACACATAACAAC
         ATTACTTATACAAAATAACTACTCCCCAATA
         TATATTTTAACCACTTACCAAAATCTCTACT
         TCTTTTATATCCATAAATCCAACAACTCCTA
         CTCTCAAACATATATTTCTATAACTCTTATC
         ACAAATAATAAAACATCCATTTCATTCATAA
         CACCACCAAACCTTATAATCCCCAACCACAC`;

console.log(findCenter(input));

console.log(`%cTime Spent: %c${new Date().getTime() - time}ms`, "color : yellow;", "color : violet;");