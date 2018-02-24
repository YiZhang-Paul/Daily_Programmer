function hasVowelsDivisibleBy3(input: string): boolean {

    let vowels = input.match(/[aeiouy]/ig);

    return vowels !== null ? vowels.length % 3 === 0 : false;

    //return /^(([^aeiouy]*[aeiouy][^aeiouy]*){3})+$/i.test(input);
}

console.log(hasVowelsDivisibleBy3("Friends, Romans, countrymen, lend me your ears!"));
console.log(hasVowelsDivisibleBy3("Double, double, toil and trouble; Fire burn and cauldron bubble."));
console.log(hasVowelsDivisibleBy3("Alas, poor Yorick! I knew him, Horatio. A fellow of infinite jest, of most excellent fancy."));
console.log(hasVowelsDivisibleBy3("To be, or not to be- that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune Or to take arms against a sea of troubles, And by opposing end them."));
console.log(hasVowelsDivisibleBy3("Everybody stand back! I know regular expressions."));