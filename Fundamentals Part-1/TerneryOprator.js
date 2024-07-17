console.log("Ternery Oprator");
const age=Number(prompt("Enter the Age"));
age>=18 ? console.log(' I Like to drink wine 🍷') : console.log(' I like to drink water 💧 ');

const drink = age>=18?'Wine 🍷':'Water 💧';

console.log("The Drink choosen is "+drink);

alert("The Drink choosen is "+drink);

console.log(`I Would like to drink ${age>=18?'Wine 🍷':'Water 💧'}`);