/*Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
as an arrow function, and using chaining!
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/


const calAverageHumanAge = function (ages){
      const humans = ages.map(age => age <=2 ? 2*age : 16+ age *4).filter(age => age >=18).reduce((acc, mov, i, arr)=> acc+ mov /arr.length, 0);
}

const avg1= calAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2= calAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);

