const movements = [200, 450, -400, 3000, -650, -139, 70, 1300];


console.log(movements);

const globalBalance= movements.reduce(function (accumlator, cuurent, index, array){
      return accumlator + cuurent;
});

console.log(globalBalance);
let sum=0;
console.log('using For loop')
for(const mov of movements){
      sum +=mov;
}
console.log(sum);

console.log('using Arrow functiom');

const balance= movements.reduce((acc, ind)=>acc+ind , 0);
console.log(balance);

// Maximum Value 

const max = movements.reduce((acc, mov)=>{
      if( acc > mov)
            return acc;
      else
            return mov;
}, movements[0]
);
console.log(`Max value is ${max}`);

// Minimum Value 

const min = movements.reduce((acc, mov)=>{
      if( acc < mov)
            return acc;
      else
            return mov;
}, movements[0]
);
console.log(`Max value is ${min}`);