console.log('Dates');
console.log('Dates');
console.log('Create a  Dates');

const curdate= new Date();
console.log(curdate);

console.log(new Date('Sep 21 2023 23:27:03 GMT+0530'));
console.log(new Date('December 24, 2023'));

const prev  = new Date(0);
console.log(prev);
console.log(new Date(3 * 24 * 60 * 60 * 1000));

const future= new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getTime());
console.log(future.getSeconds());
console.log(future.getDay());
console.log(future.getTimezoneOffset());
console.log(future.getUTCDate());
console.log(future.toISOString());
console.log(future.getTime());

console.log('calculating no of days passed');

const future2= new Date(2037, 10, 19, 15, 23);
console.log(+future2);
const calDaysPassed= (date1, date2)=>Math.abs(date2 - date1)/(1000*60*60*24); 

const days1= calDaysPassed(new Date(2037, 3, 4) , new Date(2037, 3, 14));

console.log(days1);