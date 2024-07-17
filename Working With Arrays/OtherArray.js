
const arr= [1,2,3,4,5,6,7,8,9];
console.log(new Array(1,2,3,4,5,6,7,8,9));
// Empty arrays with fill methods
const x = new Array(7);
console.log(x);
// [ <7 empty items> ]
x.fill(1, 3)
console.log(x);

arr.fill(23, 2, 6);
// filling 23 number from 2 to 6 index
console.log(arr);

console.log('Array From');

const y = Array.from({length:7}, ()=> 1);
console.log(y);

const z= Array.from({length:7}, (cur, i)=> i+1);
console.log(z);

// Array M<ethod Practice
const account1 = {
      owner: 'Jonas Schmedtmann',
      movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
      interestRate: 1.2, // %
      pin: 1111,
    };
    
    const account2 = {
      owner: 'Jessica Davis',
      movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
      interestRate: 1.5,
      pin: 2222,
    };
    
    const account3 = {
      owner: 'Steven Thomas Williams',
      movements: [200, -200, 340, -300, -20, 50, 400, -460],
      interestRate: 0.7,
      pin: 3333,
    };
    
    const account4 = {
      owner: 'Sarah Smith',
      movements: [430, 1000, 700, 50, 90],
      interestRate: 1,
      pin: 4444,
    };
    
    const accounts = [account1, account2, account3, account4];

const bankDeposits= accounts.map(acc=>acc.movements).flat(1);

// or
const bankDeposits2= accounts.flatMap(acc=>acc.movements);

console.log(bankDeposits);
console.log(bankDeposits2);
// again

const deposit= accounts.flatMap(acc=>acc.movements).filter(mov=>mov > 0).reduce((acc, val)=> acc+val, 0);

console.log(deposit);

//2

const numDeposit1000 = accounts.flatMap(acc=> acc.movements).filter(mov=>mov>=1000).length;
console.log(numDeposit1000); 

// or

const numDeposit1000_2= accounts.flatMap(acc=>acc.movements).reduce((count, cur)=> cur >= 1000 ? count+1 : count, 0 );
console.log(numDeposit1000_2);

// 3
const sum = accounts
.flatMap(acc=> acc.movements)
.reduce(
      (sums, cur) => {
            cur > 0 ? (sums.deposit +=cur) : (sums.withdrawals += cur);
      return sums;
      },
      {deposit:0, withdrawals:0}
);

console.log(sum);
