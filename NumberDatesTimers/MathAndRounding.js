

console.log('Square root');
console.log(Math.sqrt(16));
console.log(Math.sqrt(25));
console.log(Math.sqrt(25 **(1/2)));
console.log(Math.sqrt(25 **(1/3)));


console.log('Max Value');
console.log(Math.max(5, 24,56,7 ,89 ));
console.log(Math.max(5, 24,'56',7 ,89 ));
console.log(Math.max(5, '24px',56,7 ,89 ));

console.log('Radius of circle');
console.log(Math.PI * Number.parseFloat('10px')** 2);

console.log('Random Number');
console.log(Math.trunc(Math.random()*6)+1);

const random = (min , max)=>(Math.trunc(Math.random() * (max - min) +1) +min);

console.log(random(10, 20));
console.log('Rounding Integers');

console.log(Math.round(23.3));
console.log(Math.round(23.6));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.6));
  
console.log(Math.floor(23.3));
console.log(Math.floor(23.6));
console.log(Math.floor(-23.6));

console.log('Random Decimals');
console.log((92.7).toFixed(0));
console.log((92.74).toFixed(1));
console.log((92.743).toFixed(2));
console.log(+(92.7).toFixed(3));


