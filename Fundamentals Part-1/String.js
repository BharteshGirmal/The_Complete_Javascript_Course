console.log('Strings and Template Litrals');
const firstName='Bhartesh';
const lastName='Girmal';
const job='Developer';
const birthYear=1998;
const year=2023;

console.log('Normal way of Concatinating');
console.log("I'm "+firstName+" "+lastName+" Job "+job+" "+(year - birthYear)+" Years old");

console.log('using string template');

console.log(`My name is ${firstName}, working as a ${job}, and ${year-birthYear} years Old`)