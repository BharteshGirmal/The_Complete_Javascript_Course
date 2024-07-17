
const movements = [200, 450, -400, 3000, -650, -139, 70, 1300];

for(const movement of movements)
{
      if(movement > 0)
      {
            console.log(`You Desposited ${movement}`);
      }
      else
      {
            console.log(`You withdraw ${Math.abs(movement)}`);
      }
};

// for each methoad 
console.log('for each method ');
movements.forEach(function(movement){
      if(movement > 0)
      {
            console.log(`You Desposited ${movement}`);
      }
      else
      {
            console.log(`You withdraw ${Math.abs(movement)}`);
      } 
});

for(const [i, movement] of movements.entries())
{
      if(movement > 0)
      {
            console.log(`Movement ${i + 1} : You Desposited ${movement}`);
      }
      else
      {
            console.log(` Movement ${i + 1} : You withdraw ${Math.abs(movement)}`);
      } 
};

console.log('Using for Each method ...');

movements.forEach(function(move, i, arr){
      if(move > 0)
      {
            console.log(`Movement ${i + 1} : You Desposited ${move}`);
      }
      else
      {
            console.log(` Movement ${i + 1} : You withdraw ${Math.abs(move)}`);
      }    
})