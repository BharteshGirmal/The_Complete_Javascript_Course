const movements = [200, 450, -400, 3000, -650, -139, 70, 1300];


const deposis= movements.filter(function (mov){
      return mov > 0;
});

console.log(movements);
console.log(deposis);

const depositFor =[];
for( const mov of movements){
      if (mov > 0){
            depositFor.push(mov);
      }
};

console.log(depositFor);

const withdrawals=movements.filter(mov=> mov < 0);
console.log(withdrawals);