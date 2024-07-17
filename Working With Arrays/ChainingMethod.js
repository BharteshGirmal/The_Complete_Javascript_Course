const movements = [200, 450, -400, 3000, -650, -139, 70, 1300];


console.log('The Magic Chaining Method');

const eurToUsd= 1.1;

const totalDepositUSD = movements.filter(mov => mov > 0)
.map(mov => mov * eurToUsd)
.reduce((acc, mov)=> acc + mov, 0);

console.log(totalDepositUSD);