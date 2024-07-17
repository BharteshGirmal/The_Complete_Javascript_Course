const orderset = new Set(['pasta','pizza','mexican','pasta','pizza', 'pasta','pizza']);

console.log(orderset);

console.log(new Set('Bhartesh'));
console.log(orderset.size);
console.log(orderset.has('pizza'));
console.log(orderset.has('pasta'));

orderset.add('Garlic bread');
orderset.add('Garlic bread');
orderset.delete('pasta');
console.log(orderset);
//orderset.clear();

for(const order of orderset)
{
      console.log(order);
}

// exapmple

const staff=['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];

const unique= new Set(staff);
console.log(unique);
// using spread operator to convert Set ==>Array
const unique2= [...new Set(staff)];
console.log(unique2);