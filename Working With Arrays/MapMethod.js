

console.log('Map Method');

const movements = [200, 450, -400, 3000, -650, -139, 70, 1300];

const eurZToUsd = 1.1;
console.log(movements);
const mapArray= movements.map(function (mov){
      return Math.trunc(mov * eurZToUsd);
});
console.log(mapArray);
console.log('Using for loop ' );

const movementsArr =[];
for(const mov of movements){
      movementsArr.push(Math.trunc(mov*eurZToUsd));
}
console.log(movementsArr);

const mapArray2= movements.map(mov => Math.trunc(mov *eurZToUsd));

console.log(mapArray2);


const movementsDesriptions = movements.map((mov, i)=>{
      if(mov > 0)
      {
            return `Movement ${i+1}: you deposited ${mov}`;
      }
      else
      return `Movement ${i+1}: you Withdrawed ${Math.abs(mov)}`;
});

console.log(movementsDesriptions);
