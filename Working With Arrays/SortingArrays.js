

const owners= ['Bhartesh', 'Girmal', 'Java', 'JavaScript'];
console.log(owners.sort());
console.log(owners);

console.log('Numbers');

const movements = [200, 450, -400, 3000, -650, -139, 70, 1300];

console.log(movements);
console.log(movements.sort());

const sortedarr=movements.sort((a, b)=>{
      return a-b; //ascending order
});
console.log(sortedarr);