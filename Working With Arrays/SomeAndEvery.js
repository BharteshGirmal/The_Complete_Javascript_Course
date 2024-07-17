const movements = [200, 450, -400, 3000, -650, -139, 70, 1300];


console.log(movements);
console.log(movements.includes(-130));


const deposit = movements.some(mov => mov > 1500);
console.log(deposit);

// Every 
console.log('Every Method');

console.log(movements.every(mov => mov > 0));
const arr =[1, ,2 ,3,4 ,5 ,6 ,7 ];
console.log(arr);

console.log(arr.every(mov => mov > 0));

//seprate callback
const deposit2 = mov => mov < 0;
console.log(movements.some(deposit2));
console.log(movements.every(deposit2));
console.log(movements.filter(deposit2));


