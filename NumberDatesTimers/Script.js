// Array M<ethod Practice
// const account1 = {
//       owner: 'Jonas Schmedtmann',
//       movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//       interestRate: 1.2, // %
//       pin: 1111,

//       movementDates: [
//             '2023-09-02T21:31:17.178Z',
//             '2023-10-22T10:17:02.387Z',
//             '2023-02-24T14:11:04.904Z',
//             '2020-06-12T17:01:24.185Z',
//             '2022-12-09T23:36:59.604Z',
//             '2024-01-19T10:51:17.194Z',
//       ],
//     };
    
//     const account2 = {
//       owner: 'Jessica Davis',
//       movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//       interestRate: 1.5,
//       pin: 2222,
//     };
    
//     const account3 = {
//       owner: 'Steven Thomas Williams',
//       movements: [200, -200, 340, -300, -20, 50, 400, -460],
//       interestRate: 0.7,
//       pin: 3333,
//     };
    
//     const account4 = {
//       owner: 'Sarah Smith',
//       movements: [430, 1000, 700, 50, 90],
//       interestRate: 1,
//       pin: 4444,
//     };
    
//     const accounts = [account1, account2, account3, account4];


// Numbers 

console.log('Numbers');
console.log(23 ==23.0); // true
console.log(0.1 +0.2);
console.log(0.1 +0.2 === 0.3);// false

console.log(Number('23'));
console.log(+'23');

// Parsing
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e34', 10));

console.log(Number.parseFloat('2.544pcxd', 10));
console.log(Number.parseFloat('3.4rem', 10));

console.log(Number.isNaN('rf'));
console.log(Number.isFinite(20));
